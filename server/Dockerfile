FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY yarn.lock ./

ADD db /app/db
ADD routes /app/routes

RUN yarn install --production

CMD node server.js
