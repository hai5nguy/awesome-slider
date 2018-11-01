FROM node:8.11.4

COPY . /app/

WORKDIR /app/

CMD [ "npm", "run", "deploy"]
