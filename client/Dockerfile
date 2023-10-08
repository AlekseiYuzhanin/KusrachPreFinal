FROM node:19.0.1-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5050

CMD ["npm","run","serve"]