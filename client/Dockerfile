FROM node:18.11-alpine as survey_client

WORKDIR /cache

COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
RUN sysctl -p

WORKDIR /app
COPY . .

USER node
