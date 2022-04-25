FROM node:16

LABEL   name=vue-website \
        version=1.0.0 \
        maintainer="Holland Noir <holland.noir@gmail.com>"

ARG NODE_ENV=development

ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pm2
RUN npm install

EXPOSE 8080

CMD ["pm2-runtime", "server.js"]