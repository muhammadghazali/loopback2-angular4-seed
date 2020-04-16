FROM node:6

EXPOSE 3000

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .

CMD ["node", "."]