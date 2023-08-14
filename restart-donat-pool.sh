#!/bin/sh

docker stop donat-pool
docker rm donat-pool
docker rmi donat-pool
docker build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa1)" . -t donat-pool
docker run -p 3000:3000 --network host --name donat-pool -d donat-pool