# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["./node_modules/next/dist/bin/next", "start"]
