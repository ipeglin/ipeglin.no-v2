FROM node:lts

WORKDIR /frontend

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm", "run", "start" ]