FROM node:8-onbuild AS build

RUN npm run compile:prod

FROM nginx:alpine

COPY --from=build /usr/src/app/public/. /app/
COPY version.txt /app/
COPY nginx.conf run.sh /etc/nginx/

RUN ["/etc/nginx/run.sh", "check"]
CMD ["/etc/nginx/run.sh", "start"]
