FROM node:10.22.0 AS base

WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install --production=true
COPY ./src /app/src
RUN npm run build

FROM node:10.22.0-alpine
RUN mkdir -p /usr/src/app
RUN chgrp -R 0 /usr/src/app && chmod -R g=u /usr/src/app
WORKDIR /usr/src/app

COPY --from=base /app/dist /usr/src/app/dist
COPY --from=base /app/package.json /usr/src/app/package.json
COPY --from=base /app/package-lock.json /usr/src/app/package-lock.json
COPY --from=base /app/node_modules /usr/src/app/node_modules
RUN apk add --no-cache make gcc g++ python && \
  npm rebuild bcrypt --build-from-source && \
  rm -rf /usr/src/app/node_modules/sharp &&\
  npm install && \
  apk del make gcc g++ python

ENTRYPOINT [ "npm", "start" ]