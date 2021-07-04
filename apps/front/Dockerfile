FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/front .
ENV PORT=3334
EXPOSE ${PORT}
RUN yarn install --production
CMD node ./main.js
