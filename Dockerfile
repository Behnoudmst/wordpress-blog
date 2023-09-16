# Dockerfile

# base image
FROM node:16-alpine
# create & set working directory
RUN mkdir -p /usr/wordpress-next
WORKDIR /usr/wordpress-next
# copy source files
COPY . /usr/wordpress-next

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3002
CMD npm run start