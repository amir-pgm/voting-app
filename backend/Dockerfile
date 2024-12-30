# Use a lighter base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY ./ ./

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]