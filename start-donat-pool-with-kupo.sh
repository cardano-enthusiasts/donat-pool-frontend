#!/bin/sh

export VOLUME_SOURCE = ~/kupo
docker-compose build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa1)"
