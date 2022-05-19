FROM node:16-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --production

ADD public /app/public
ADD src /app/src

ARG SERVER_URI

# replace server address:port
RUN sed -i "s,http://localhost:5001,$SERVER_URI,g" src/buildEnv.js

RUN yarn build

FROM nginx:1.21-alpine as runtime

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
