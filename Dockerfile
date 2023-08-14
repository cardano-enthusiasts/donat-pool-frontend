FROM node:18.17.1 as builder
# Add ssh key for private repository (donat-pool-offchain)
ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa 
RUN chmod 600 /root/.ssh/id_rsa  
# make sure your domain is accepted
RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts
WORKDIR /app
COPY package.json .
RUN npm pkg delete scripts.prepare
RUN npm i --omit=dev
# Remove key 
RUN rm /root/.ssh/id_rsa
COPY ["./public/fonts", "./public/gif", "./public/icons", "./public/img", "./public/"]
COPY ["./src", "./.env", './']
RUN npm run build

FROM node:18.17.1
WORKDIR /app
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/.next ./.next
CMD ["npm", "run", "start"]
