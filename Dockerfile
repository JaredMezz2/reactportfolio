# build environment
FROM node:14.15.1 as build
# set working directory
WORKDIR ./src
# add `/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH
# install app dependencies
COPY /package.json ./
COPY /yarn.lock ./
RUN yarn
RUN yarn add react-scripts@3.4.1 -g

# install hot reload for dev
#RUN yarn install nodemon --save-dev

# add app
COPY . ./
RUN yarn run build

# production environment
FROM nginx:latest
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;", "-e WATCHPACK_POLLING=true"]

# Dev
#CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
