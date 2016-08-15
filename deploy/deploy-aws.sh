#!/bin/bash

docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
docker push adrielldagasuan/products-service:$CIRCLE_SHA1
ansible-playbook deploy/ec2-cloudformation.yml