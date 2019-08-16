FROM node:8-onbuild AS build

RUN npm run compile:prod

FROM nginx:alpine

RUN wget -q https://github.com/jibrelnetwork/dockerize/releases/latest/download/dockerize-alpine-linux-amd64-latest.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-latest.tar.gz \
 && rm dockerize-alpine-linux-amd64-latest.tar.gz

COPY --from=build /usr/src/app/public/. /app/
COPY version.txt /app/
COPY nginx.conf run.sh /etc/nginx/

CMD ["/etc/nginx/run.sh", "start"]
