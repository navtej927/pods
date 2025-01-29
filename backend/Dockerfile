FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "npm run dev && npm run migrate && npm run seed"]