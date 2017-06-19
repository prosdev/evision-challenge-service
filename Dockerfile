FROM node:8.1.2-alpine

RUN npm install -g pm2
RUN npm install -g babel-cli

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000
EXPOSE 8443
CMD ["npm", "start"]
