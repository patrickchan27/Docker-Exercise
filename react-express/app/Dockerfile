FROM node:16-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 3000

RUN echo "hello react"

CMD [ "npm", "start" ]
