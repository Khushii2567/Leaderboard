FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5173

ENV CHOKIDAR_USEPOLLING=1

RUN npm run build

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
