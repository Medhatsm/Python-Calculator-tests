# FROM node:20-alpine3.18
FROM cypress/included:9.7.0
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npx","cypress","run"]
# CMD ["curl","127.0.0.1:5000"]