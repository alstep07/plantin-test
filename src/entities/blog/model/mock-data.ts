import { Blog, BlogCategory } from "./schema";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Tips & Tricks For Cutting",
    content:
      "Want healthier, bushier plants? Master the art of cutting! Use clean, sharp scissors or pruning shears to make clean cuts just above a leaf node or bud. Always trim dead or yellowing leaves to boost growth and prevent disease. For bushier plants, pinch off the top set of leaves to encourage branching. Cut in the morning when plants are most hydrated, and avoid over-pruning. Disinfect tools between cuts to prevent spreading pests or fungi. With a little care and timing, your plants will grow stronger and more vibrant!",
    readDurationMinutes: 8,
    createdAt: "2024-03-15T10:00:00Z",
    categories: [BlogCategory.FEATURED],
    imageSrc: "/blog/plant_care.png",
  },
  {
    id: "2",
    title: "Indoor Plant Lighting",
    content:
      "Understanding proper lighting is crucial for indoor plant success. Discover how to assess your space's lighting conditions and choose the right plants that will thrive in your specific environment.",
    readDurationMinutes: 6,
    createdAt: "2024-03-14T15:30:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/plants.png",
  },
  {
    id: "3",
    title: "Watering Guide",
    content:
      "Master the art of proper plant watering with our comprehensive guide. Learn about watering frequency, signs of over and under-watering, and how to establish a successful watering routine for different types of plants.",
    readDurationMinutes: 10,
    createdAt: "2024-03-13T09:15:00Z",
    categories: [BlogCategory.TOP_OF_THE_DAY],
    imageSrc: "/blog/watering.png",
  },
  {
    id: "4",
    title: "Plant Pot Guide",
    content:
      "Selecting the right pot is more than just aesthetics. Explore the importance of proper pot sizing, drainage considerations, and material choices to ensure your plants have the best foundation for growth.",
    readDurationMinutes: 7,
    createdAt: "2024-03-12T14:45:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/repot.png",
  },
  {
    id: "5",
    title: "Seedling Care Guide",
    content:
      "Follow our detailed guide on nurturing seedlings from the moment they sprout. Learn about optimal conditions, common problems to watch for, and how to successfully transition your seedlings to larger containers.",
    readDurationMinutes: 9,
    createdAt: "2024-03-11T11:20:00Z",
    categories: [BlogCategory.TOP_OF_THE_DAY],
    imageSrc: "/blog/sprout.png",
  },
  {
    id: "6",
    title: "Natural Pest Control",
    content:
      "Discover eco-friendly solutions to common plant pest problems. Learn how to identify different pests, prevent infestations, and treat affected plants using natural remedies that are safe for your home environment.",
    readDurationMinutes: 8,
    createdAt: "2024-03-10T13:25:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/plant_care.png",
  },
  {
    id: "7",
    title: "Plant Arrangement Tips",
    content:
      "Transform your living space with strategic plant placement. Learn about visual balance, height variations, and how to create stunning plant displays that enhance your home's aesthetic while ensuring optimal growing conditions.",
    readDurationMinutes: 11,
    createdAt: "2024-03-09T16:40:00Z",
    categories: [],
    imageSrc: "/blog/plants.png",
  },
  {
    id: "8",
    title: "Soil Basics",
    content:
      "Understanding soil composition is key to plant health. Explore different soil types, learn about essential nutrients, and discover how to create custom soil mixes tailored to your plants' specific needs.",
    readDurationMinutes: 9,
    createdAt: "2024-03-08T08:50:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/soil.png",
  },
  {
    id: "9",
    title: "Seasonal Care Guide",
    content:
      "Keep your plants thriving year-round with our seasonal care guide. Learn how to adjust watering, lighting, and feeding schedules as seasons change, and prepare your plants for optimal growth in every season.",
    readDurationMinutes: 7,
    createdAt: "2024-03-07T12:15:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/plant_care.png",
  },
  {
    id: "10",
    title: "Humidity Control",
    content:
      "Master the art of humidity control for your tropical houseplants. Discover various methods to increase humidity, signs of low humidity stress, and how to create the perfect microclimate for your moisture-loving plants.",
    readDurationMinutes: 6,
    createdAt: "2024-03-06T10:30:00Z",
    categories: [BlogCategory.INTERESTING],
    imageSrc: "/blog/watering.png",
  },
  {
    id: "11",
    title: "Propagation Station",
    content:
      "Get creative with your plant propagation setup! Explore various DIY ideas for creating beautiful and functional propagation stations using common household items, recycled materials, and simple crafting techniques.",
    readDurationMinutes: 8,
    createdAt: "2024-03-05T09:15:00Z",
    categories: [],
    imageSrc: "/blog/sprout.png",
  },
  {
    id: "12",
    title: "Growth Cycles",
    content:
      "Dive deep into the fascinating world of plant growth cycles. Learn about dormancy periods, growth spurts, and how to optimize your care routine based on your plants' natural rhythms and seasonal changes.",
    readDurationMinutes: 10,
    createdAt: "2024-03-04T14:20:00Z",
    categories: [],
    imageSrc: "/blog/sprout.png",
  },
  {
    id: "13",
    title: "Gardening Tools",
    content:
      "Build your indoor gardening toolkit with our comprehensive guide to essential equipment. From basic necessities to specialized tools, discover what you really need to maintain a thriving indoor garden.",
    readDurationMinutes: 7,
    createdAt: "2024-03-03T11:45:00Z",
    categories: [],
    imageSrc: "/blog/plant_care.png",
  },
  {
    id: "14",
    title: "Plant Diseases",
    content:
      "Learn to identify and treat common plant diseases before they become serious problems. Our guide covers symptoms, prevention methods, and organic treatment options to keep your plants healthy and thriving.",
    readDurationMinutes: 9,
    createdAt: "2024-03-02T16:30:00Z",
    categories: [],
    imageSrc: "/blog/plants.png",
  },
  {
    id: "15",
    title: "Care Calendar",
    content:
      "Stay organized with your plant care routine by creating an effective care calendar. Learn how to track watering schedules, fertilization needs, pruning times, and other essential maintenance tasks.",
    readDurationMinutes: 6,
    createdAt: "2024-03-01T10:00:00Z",
    categories: [],
    imageSrc: "/blog/plant_care.png",
  },
];
