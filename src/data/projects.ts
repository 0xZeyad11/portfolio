import type { Project } from "@/types/portfolio";
import kitchenlyPic from "@/assets/kitchenly.jpg";
import restaurantPic from "@/assets/restaurant.jpg";

export const PROJECTS_DATA: Project[] = [
  {
    id: "kitchenly",
    tag: "PRJ_01 // KITCHENLY",
    title: "PROJECT // KITCHENLY",
    category: "FOOD ORDERING & REALTIME TRACKING",
    description:
      "Modular REST API with 28+ endpoints for users, menus, orders, and payments. Implemented JWT authentication and RBAC. Integrated Stripe payment processing. Built real-time order tracking using WebSockets (Socket.io). Developed geospatial search using PostGIS. Designed normalized PostgreSQL schema with Prisma ORM. Generated OpenAPI (Swagger) specs.",
    image: kitchenlyPic,
    technologies: ["Express.js", "PostgreSQL", "Prisma", "PostGIS", "WebSockets", "Stripe"],
    status: "STATUS: SOURCE_AVAILABLE",
    statusVariant: "default",
    linkText: "VIEW GITHUB",
    linkUrl: "https://github.com/0xZeyad11/Kitchenly",
    linkVariant: "default",
  },
  {
    id: "restaurant-api",
    tag: "PRJ_02 // FOOD PLATFORM",
    title: "RESTAURANT API",
    category: "MULTI-ROLE ORDERING ENGINE",
    description:
      "Built a RESTful API for a food delivery platform using Node.js, Express, and MongoDB. Implemented JWT authentication and role-based authorization (RBAC) across client, admin, vendor, and driver roles. Modeled scalable NoSQL schemas using Mongoose.",
    image: restaurantPic,
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT / RBAC"],
    status: "STATUS: ACTIVE",
    statusVariant: "secondary",
    linkText: "VIEW GITHUB",
    linkUrl: "https://github.com/0xZeyad11/Restaurant---Backend-API",
    linkVariant: "secondary",
  },
  {
    id: "termadoro",
    tag: "PRJ_03 // CLI TOOL",
    title: "TERMADORO",
    category: "DEVELOPER PRODUCTIVITY",
    description:
      "Developed and published a cross-platform CLI productivity tool on npm for Pomodoro-based time tracking with tagging and session analytics. Designed interactive terminal workflows with real-time controls and desktop notifications.",
    technologies: ["NPM", "CLI", "Terminal", "Node.js", "TypeScript"],
    status: "PUBLISHED",
    statusVariant: "destructive",
    linkText: "NPMJS.COM",
    linkUrl: "https://www.npmjs.com/package/termadoro",
    linkVariant: "destructive",
  },
];
