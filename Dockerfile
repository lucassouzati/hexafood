FROM node:18

USER root

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app

RUN chown -R node:node /home/node/app

USER node

RUN yarn install

EXPOSE 3000
