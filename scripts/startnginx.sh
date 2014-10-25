#! /bin/bash
# ./stopnginx.sh

mkdir -p nginx/logs

nginx -p nginx  -c conf/nginx.conf

ps -ef|grep nginx 