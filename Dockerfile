FROM node:22-alpine AS base

WORKDIR /app

COPY /.next/standalone ./

EXPOSE 3000

CMD ["node", "server.js"]