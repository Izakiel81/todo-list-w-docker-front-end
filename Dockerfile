FROM node:22-alpine

WORKDIR /todo-app

COPY package.json yarn.lock* ./

RUN  yarn install --production=false

COPY . .

EXPOSE 5137

CMD ["yarn", "dev", "--host"]

