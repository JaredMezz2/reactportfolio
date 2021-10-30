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
# add app
COPY . ./
RUN yarn run build
# production environment
FROM nginx:latest
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
