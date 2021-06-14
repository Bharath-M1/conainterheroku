FROM ubuntu:latest
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs


WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5000


ENTRYPOINT npm start