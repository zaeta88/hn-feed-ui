# To build the image (for local development):
# - On project root run the next command:
# docker build -t hn-feed-ui -f Dockerfile .

FROM node:8.11.3

WORKDIR /app

COPY package.json /app/

RUN npm i --quiet

COPY . ./

EXPOSE 4200

CMD [ "npm", "run", "start" ]
