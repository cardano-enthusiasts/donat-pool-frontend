FROM node:19

# Add ssh key for private repository (donat-pool-offchain)
ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa 
RUN chmod 600 /root/.ssh/id_rsa  
# make sure your domain is accepted
RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# Create app directory
RUN mkdir -p /code
WORKDIR /code
# Install app dependencies
COPY package.json /code
RUN npm install
# Remove key 
RUN rm /root/.ssh/id_rsa
# Bundle app source
COPY . /code
RUN npm run build
EXPOSE 4008
CMD ["npm", "run", "prod"]