FROM node:6

EXPOSE 4200

RUN npm install -g @angular/cli@1.4.9

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/app/.bin:$PATH

COPY . .

CMD [ "npm", "start" ]
