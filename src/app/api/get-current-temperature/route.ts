import { NextResponse } from "next/server";
import { generateRandomTemperature, getCurrentTemperature } from "@/lib/weather";
import { getLocationByIp } from "@/lib/location";

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 60;
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export async function GET(request: Request) {
  try {
    const clientIp = request.headers.get("x-forwarded-for") || "unknown";

    const now = Date.now();
    const clientData = requestCounts.get(clientIp);

    if (clientData) {
      if (now > clientData.resetTime) {
        requestCounts.set(clientIp, {
          count: 1,
          resetTime: now + RATE_LIMIT_WINDOW,
        });
      } else if (clientData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429, headers: { "Retry-After": "60" } },
        );
      } else {
        requestCounts.set(clientIp, {
          ...clientData,
          count: clientData.count + 1,
        });
      }
    } else {
      requestCounts.set(clientIp, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW,
      });
    }

    if (clientIp === "::1" || clientIp === "127.0.0.1") {
      return NextResponse.json({
        temperature: generateRandomTemperature(),
        location: { city: "Kyiv", country: "UA" },
      });
    }

    const location = await getLocationByIp(clientIp);
    const temperature = await getCurrentTemperature(location);

    return NextResponse.json({
      temperature,
      location: {
        city: location.city,
        country: location.country,
      },
    });
  } catch (error) {
    console.error("Error in temperature API:", error);
    return NextResponse.json(
      { error: "Failed to get temperature data" },
      { status: 500 },
    );
  }
}
