# donat-pool-frontend

Front-end for Donat.Pool made with React, Typescript and love)

## Prerequisites

1. Nodejs
2. Docker

## Installation

1. Clone repository
2. Install project's required dependencies
3. Create `.env.local` file and add config parameters from `.env.example`

## Starting project in development mode

1. Run necessary docker's containers via

```bash
docker compose up
```

2. Start project

```bash
npm run dev
```

3. Open [http://localhost:4008](http://localhost:4008) with your browser

## Start in docker

```
docker build --build-arg SSH_PRIVATE_KEY="$(cat <path to id_rsa>)" . -t donat-pool
docker run -p 4008:4008 --network host --name donat-pool donat-pool
```
