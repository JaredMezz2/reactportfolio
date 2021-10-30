# build enviroment
FROM node:14.15.1 as builder

#WORKDIR /app
#ENV PATH /app/node_modules/.bin$PATH
#COPY package.json ./
#RUN npm config set unsafe-perm true
#RUN npm install
#COPY . ./
#RUN npm run build

#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#COPY . /usr/src/app
#RUN npm install
#RUN npm run build

WORKDIR ./src
ENV PATH ./node_modules/.bin:$PATH
COPY /package.json ./
COPY /yarn.lock ./
RUN yarn
RUN yarn add react-scripts@3.4.1 -g
COPY . ./
RUN yarn run build
