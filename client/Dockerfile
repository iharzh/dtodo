FROM node:16.14.0-alpine
WORKDIR /src
COPY package.json ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
