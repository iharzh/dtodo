FROM node:14-alpine
ENV PG_USER=postgres
ENV PG_PASSWORD=password
ENV PG_DATABASE=todos
ENV PG_PORT=5432
WORKDIR /src
COPY package.json ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
