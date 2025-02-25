# 1. Construcción con Node.js en Debian
FROM node:18 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production  
COPY . .
RUN npm run build

# 2. Servir con Nginx en Alpine
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]