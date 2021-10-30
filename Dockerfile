# build enviroment
FROM node:14.15.1 as builder
WORKDIR ./src
ENV PATH ./node_modules/.bin:$PATH
COPY /package.json ./
COPY /yarn.lock ./
RUN yarn
RUN yarn add react-scripts@3.4.1 -g
COPY . ./
RUN yarn run build
