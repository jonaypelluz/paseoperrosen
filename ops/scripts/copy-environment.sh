#!/bin/sh
ENV=$1

if [[ -f ".env" ]]; then
    echo ".env exists."
else 
    cp -n ops/docker/nextjs/${ENV}/.env.dist .env
fi
