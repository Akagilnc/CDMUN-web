FROM nginx
EXPOSE 80

ADD ./dist usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
