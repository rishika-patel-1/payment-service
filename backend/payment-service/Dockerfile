FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV PORT=5003
ENV SERVICE_NAME=Payment-Service

EXPOSE 5003

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://localhost:5003/status || exit 1

CMD ["node", "index.js"]
