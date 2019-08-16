#!/bin/sh -e

RUNMODE="${1:-start}"

dockerize -template /etc/nginx/nginx.conf:/etc/nginx/nginx.conf

if [ "${RUNMODE}" = "check" ]; then
    /usr/sbin/nginx -t
else
    echo "Starting jwallet-web-landing service, version: `cat /app/version.txt` on node `hostname`"
    /usr/sbin/nginx
fi
