FROM node:hydrogen-alpine as build-env

COPY package.json package-lock.json ./
RUN npm install

RUN mkdir -p /usr/src/app && cp -R ./node_modules ./usr/src/app

WORKDIR /usr/src/app

COPY . ./

RUN npm run build --mode=production

FROM nginx:mainline-alpine3.18-perl

COPY ./.nginx/${NGINX_CONFIG_FILE:-nginx.conf} /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-env /usr/src/app/dist /usr/share/nginx/html/web-app

COPY --from=build-env /usr/src/app/dist/* /tmpl/dist/web-app/

COPY env.sh /docker-entrypoint.d/env.sh

RUN dos2unix /docker-entrypoint.d/env.sh

RUN chmod +x /docker-entrypoint.d/env.sh

CMD ["nginx", "-g", "daemon off;"]
