FROM node:16

WORKDIR /backend

COPY package*.json ./

RUN npm install
RUN npm i -g ts-node-dev

copy . .

CMD [ "npm", "run", "start" ]