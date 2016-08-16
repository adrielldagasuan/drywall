#!/bin/bash

docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
docker push adrielldagasuan/user-management:$CIRCLE_SHA1
ansible-playbook deploy/ecs-deploy.yml
