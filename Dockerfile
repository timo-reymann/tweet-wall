FROM node:8-jessie-slim

EXPOSE 3000

ENV CONSUMER_KEY=""
ENV CONSUMER_SECRET=""
ENV ACCESS_TOKEN_KEY=""
ENV ACCESS_TOKEN_SECRET=""

WORKDIR /app

ADD package*.json ./
RUN npm install --only=production

ADD src/ src/

CMD ["npm", "run", "server"]