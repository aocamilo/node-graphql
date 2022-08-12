FROM node:alpine

WORKDIR /usr/app

COPY ./ ./

RUN npm install

CMD ["npm", "run", "dev"]