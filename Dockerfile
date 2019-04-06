FROM node:8.11.0

# Set env variables

# Change work dir
WORKDIR /app

# Copy application files
COPY . .

# Install Build Dependencies
RUN npm install

# Lint
RUN npm run lint

# Set Env Variables
ENV NODE_ENV="production"
ENV MONGO_URL="mongodb://mongo:27017/catho"

# Build
RUN npm run build

# Remove Build Dependencies
RUN rm -r node_modules

# Install Server Dependencies
RUN npm install --only=production

# Expose Port
EXPOSE 8080

# Start Server
CMD ["npm", "run", "start:populate"]