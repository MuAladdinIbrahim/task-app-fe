# Use official Node.js runtime as parent image
FROM node:19-alpine

# Set the working directory to /app
WORKDIR /app

# Copy Dependencies
COPY package*.json ./
COPY yarn.lock ./


# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN yarn build

# Set environment variable for the production server
ENV NODE_ENV=production

# Expose port 3000 for the server
EXPOSE 3000

# Start the server
CMD ["yarn", "start"]