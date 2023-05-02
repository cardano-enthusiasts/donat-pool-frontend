# donat-pool-frontend
## Getting Started

Create .env.local and add config parameters from .env.example

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:4008](http://localhost:4008) with your browser to see the result.

## Start in docker

```
docker build --build-arg SSH_PRIVATE_KEY="$(cat <path to id_rsa>)" . -t donat-pool
docker run -p 4008:4008 --network host --name donat-pool donat-pool
```