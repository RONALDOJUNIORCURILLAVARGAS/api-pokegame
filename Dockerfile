FROM node:20.11.0-alpine

#RUN npm install -g http-server
RUN mkdir -p /usr/src/nuxt-app

WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git 
#copiando todo lo del package.json
COPY . /usr/src/nuxt-app/
RUN npm install


#RUN npm run start

EXPOSE 5050

ENV NUXT_HOST=0.0.0.0
ENV PORT="4600"
ENV VERSION="v.1.0.0"
ENV BASE="/"
ENV NUXT_PORT=5050

#CMD ["http-server", "dist" ]
CMD ["npm", "start" ]