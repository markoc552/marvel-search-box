#Dockerfile for building Marvel search box production image

FROM node:10.23 as builder

LABEL maintainer="Marko Perajica"
LABEL version="1.0"

RUN mkdir /opt/msb

WORKDIR "/opt/msb"

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./yarn.lock ./

RUN yarn upgrade
RUN yarn install

COPY ./ ./

RUN yarn build

FROM nginx:latest
EXPOSE 3000
COPY ./nginx/msb.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/msb/build /usr/share/nginx/html