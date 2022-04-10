# Docker

[Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)

[Cheat Sheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)

[Docker — 從入門到實踐](https://yeasy.gitbook.io/docker_practice/)

# Acticle

[Dockerize your React app](https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e)

## Image

Image is read only. If you have any change, you need to rebuild.

Create image
`docker build -t <name:tag> <PATH>`
`docker image build -t <name:tag> <PATH>`

List images
`docker images`

## Container

Create container
`docker run -d --name <name> -p <hostPort>:<port> <image:tag>`

Start container
`docker start <container>`

Stop container
`docker stop <container>`

Remove container
`docker rm <container>`

## Docker Compose

Create and start containers
`docker compose up`

Stop and remove containers, networks
`docker compose down`

Build the new images
`docker compose up --build`