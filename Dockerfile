FROM node:10.12.0

COPY . /app/

WORKDIR /app/

CMD [ "npm", "run", "deploy"]
