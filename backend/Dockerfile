FROM node:16

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 5000

CMD ["nest", "start"]