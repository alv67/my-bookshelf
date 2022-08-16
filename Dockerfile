FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN chown -R node /usr/src/app
USER node
RUN npm run build
ENV PORT 3000
EXPOSE 3000
EXPOSE 24678
CMD npm run dev -- --host
