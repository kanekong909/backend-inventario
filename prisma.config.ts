// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  // Cambiamos env() por process.env para que no falle si la variable no existe en build
  datasource: {
    url: process.env.DATABASE_URL,
  },
});