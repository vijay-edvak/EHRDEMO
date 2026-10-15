FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY ehr-admin-backend/package*.json ehr-admin-backend/
RUN npm ci --ignore-scripts
COPY ehr-admin-backend ehr-admin-backend
RUN npm run build --workspace=ehr-admin-backend
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/ehr-admin-backend/dist ./dist
COPY ehr-admin-backend/package.json ./package.json
USER node
EXPOSE 3000
CMD ["node","dist/server.js"]
