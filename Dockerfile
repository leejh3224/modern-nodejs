FROM mhart/alpine-node:9.7.1

RUN yarn global add nodemon

COPY ./package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app

COPY ./.babelrc /usr/src/app
COPY ./package.json /usr/src/app
COPY ./src/ /usr/src/app/src/

CMD ["yarn", "start"]