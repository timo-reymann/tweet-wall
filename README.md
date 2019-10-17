tweet-wall
===
[![GitHub Release](https://img.shields.io/github/v/tag/timo-reymann/tweet-wall.svg?label=version)](https://github.com/timo-reymann/tweet-wall/releases)
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/timoreymann/tweet-wall)](https://hub.docker.com/r/timoreymann/tweet-wall/builds)

## What is this?
A simple node app, packaged into a docker container to display recent tweets for a specific search, for events etc.

## Requirements
Docker or node installed, depending on how you would like to run your own tweet-wall

## How to use?

### Configuration
You need a active twitter developer account and a active app, 
then you need to create a token pair and 
fill it into the docker container with environment variables:

- CONSUMER_KEY
- CONSUMER_SECRET
- ACCESS_TOKEN_KEY
- ACCESS_TOKEN_SECRET

## Run with node on host/local machine

```bash
npm install
npm run server
```

## Using docker

```bash
docker run -p 3000:3000 \
           -e CONSUMER_KEY= \
           -e CONSUMER_SECRET= \
           -e ACCESS_TOKEN_KEY= \
           -e ACCESS_TOKEN_SECRET= \ 
           timoreymann/tweet-wall
```
