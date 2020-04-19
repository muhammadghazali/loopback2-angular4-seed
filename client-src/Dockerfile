FROM node:10

EXPOSE 4200

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .
CMD ["npm", "start"]
