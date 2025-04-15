# PlantIn Test App

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [API Structure](#api-structure)
- [Development Process](#development-process)
- [Deployment Process](#deployment-process)
- [Technology Stack](#technology-stack)

## Overview

This is a test task implementation for PlantIn, built with Next.js.

A live demo is available at [https://plantin-test.vercel.app/](https://plantin-test.vercel.app/).

## Project Structure

The project follows the Feature-Sliced Design (FSD) methodology, organizing code into the following layers:

```
src/
├── app/           # Application layer - routing, layouts, pages
├── widgets/       # Widgets layer - complex UI components
├── features/      # Features layer - user interactions
├── entities/      # Entities layer - business logic
├── shared/        # Shared layer - reusable components, utilities
└── lib/           # Infrastructure layer - API clients, configs
```

### Layer Descriptions:

- **app**: Contains the application's routing configuration and page components
- **widgets**: Complex UI components that combine multiple entities/features
- **features**: User interactions and business processes
- **entities**: Core business entities and their logic
- **shared**: Reusable UI components, utilities, and types
- **lib**: Infrastructure code, API clients, and configuration

## API Structure

API endpoints:

- `/api/get-current-temperature` - Returns current temperature and location data
  - **Method**: GET
  - **Response Format**: JSON
  - **Response Fields**:
    - `temperature`: Current temperature in Celsius (number)
    - `location`: Object containing city and country information
  - **Rate Limiting**: 60 requests per minute per IP
  - **Error Handling**:
    - 429: Too many requests
    - 500: Server error
  - **Implementation Details**:
    - Uses Weatherstack API for real temperature data
    - Falls back to random temperature (-10°C to +30°C) for localhost
    - Uses IP-API for location detection
    - Requires WEATHERSTACK_API_KEY environment variable

## Development Process

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment Process

### Vercel Deployment

The application is deployed on Vercel. The deployment process is automated through Vercel's platform:

1. Push changes to the main branch
2. Vercel automatically builds and deploys the application
3. Environment variables are managed through Vercel's dashboard

### Build Process

```bash
# Build the application
yarn build

# Start the production server
yarn start
```

## Technology Stack

- **Framework**: [Next.js 15.3.0](https://nextjs.org/docs)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/docs)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/docs)
- **Validation**: [Zod](https://zod.dev)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com)
