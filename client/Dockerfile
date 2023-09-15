FROM node:18.11-alpine as survey_client

WORKDIR /cache

COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

WORKDIR /app
COPY . .

#CMD npm start dev

# docker build -t react_typescript:developement .
# docker run -p 3028:3000 -v /app/node_modules -v $(pwd):/app react_typescript:developement
