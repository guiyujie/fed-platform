#!/bin/bash

# 获取服务器地址
SERVER=$1
PORT=$2
DEPLOY_DIR=$3
BUILD_DIR=$4
# 将生成的代码拷贝部署目录（若目录不存在则创建）
rsync -e "ssh -p ${PORT}" -a ./${BUILD_DIR}/**  ${SERVER}:${DEPLOY_DIR}