FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 6623

CMD ["nginx", "-g", "daemon off;"]