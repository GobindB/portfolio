FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for my personal page frontend react app."
LABEL maintainer = ["gobind@thesinghs.org"]

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]