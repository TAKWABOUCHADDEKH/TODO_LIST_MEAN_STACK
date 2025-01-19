# Use official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the entire application code into the container
COPY . .

# Expose the port that the backend will run on (default is usually 3000)
EXPOSE 3000

# Command to start the backend server
CMD ["node", "server.js"]
