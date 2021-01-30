### STAGE 1: Build ###
FROM node:10.16.1-alpine AS build

WORKDIR /app
COPY package*.json /app/

RUN apk --no-cache --virtual build-dependencies add\
    git\
    && npm install\
    && apk del build-dependencies
    
COPY ./ /app/
#RUN CI=true npm test
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.16.0-alpine
COPY --from=build /app/build/ /usr/share/nginx/html
