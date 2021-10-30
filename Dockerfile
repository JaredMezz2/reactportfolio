# build enviroment
FROM node:14.15.1 as builder

WORKDIR /app
ENV PATH /app/node_modules/.bin$PATH
COPY package.json ./
RUN npm config set unsafe-perm true
&& npm install
COPY . ./
RUN npm run build

#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#COPY . /usr/src/app
#RUN npm config set unsafe-perm true
#RUN npm --max_old_space_size=512 install
#RUN npm --max_old_space_size=512 run build
