# Build stage
FROM node:22-alpine AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

# Production stage
FROM gcr.io/distroless/nodejs22-debian12 AS production

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["./node_modules/next/dist/bin/next", "start"]
