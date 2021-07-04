FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/back .
ENV PORT=3333
EXPOSE ${PORT}
RUN yarn install --production
CMD node ./main.js
