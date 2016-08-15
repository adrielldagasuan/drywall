#!/bin/bash

# Exit on any error
set -e

docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
docker push adrielldagasuan/products-service:$CIRCLE_SHA1
sudo /opt/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
kubectl patch deployment products-service -p '{"spec":{"template":{"spec":{"containers":[{"name":"products-service","image":"docker.io/adrielldagasuan/products-service:'"$CIRCLE_SHA1"'"}]}}}}'
