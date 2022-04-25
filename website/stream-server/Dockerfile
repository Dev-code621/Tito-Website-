FROM node:16-bullseye

LABEL   name=stream-server \
        version=1.0.0 \
        maintainer="Holland Noir <holland.noir@gmail.com>"

ARG NODE_ENV=development
ARG SERVER_IP=127.0.0.1

ENV NODE_ENV=$NODE_ENV
ENV SERVER_IP=$SERVER_IP
RUN apt update && apt install python3-pip -y
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN node --version
RUN npm install pm2 -g
RUN npm install

EXPOSE 8342
EXPOSE 55000-55020/tcp
EXPOSE 55000-55020/udp
# CMD ["npm", "start"]

CMD ["pm2-runtime", "server.js"]