FROM node:21.7.1
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 4001
CMD ["npm", "start"]