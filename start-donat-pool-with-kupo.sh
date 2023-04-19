#!/bin/sh

VOLUME_SOURCE = /shared/donat-pool/
docker-compose build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa)"