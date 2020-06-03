FROM ubuntu:latest

MAINTAINER Michal Jaracz <michaljaracz2@gmail.com>

# install node

RUN apt-get update -yqq
RUN apt-get install -yqq curl gnupg apt-utils
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash
RUN apt-get install -yq nodejs

# install nestjs cli globaly
RUN npm install -g @nestjs/cli

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get -yqq update
RUN apt-get -yqq install yarn

ADD workdir /opt/workdir
WORKDIR /opt/workdir

RUN yarn install
RUN nest build

CMD node dist/main

EXPOSE 3000