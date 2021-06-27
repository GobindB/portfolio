FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image formy personal page express server."
LABEL maintainer = ["danielmurph8@gmail.com", "dylanedwards290@gmail.com"]

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]
RUN ls
RUN yarn install
COPY . .

EXPOSE 3030

CMD ["node", "server.js"]