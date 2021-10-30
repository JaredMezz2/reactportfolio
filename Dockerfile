# build enviroment
FROM node:14.15.1 as builder
#WORKDIR /app
#ENV PATH /app/node_modules/.bin$PATH
#COPY package.json ./
#RUN npm install
#RUN npm install react-scripts@4.0.3 -g
#COPY . ./
#RUN npm run build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run build
