# Use official Node.js runtime as parent image
FROM node:19-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./


# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Set environment variable for the production server
ENV NODE_ENV=production

# Expose port 3000 for the server
EXPOSE 3000

# Start the server
CMD ["npm", "start"]