FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY ehr-admin-frontend/package*.json ehr-admin-frontend/
RUN npm ci --ignore-scripts
COPY ehr-admin-frontend ehr-admin-frontend
RUN npm run build --workspace=ehr-admin-frontend
FROM nginx:1.27-alpine
COPY --from=build /app/ehr-admin-frontend/dist/ehr-admin-frontend /usr/share/nginx/html
COPY ehr-admin-frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
