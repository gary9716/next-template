#!/bin/bash

# Docker 構建腳本
set -e

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 默認值
IMAGE_NAME="next-template"
TAG="latest"
BUILD_TYPE="production"

# 解析命令行參數
while [[ $# -gt 0 ]]; do
  case $1 in
    -t|--tag)
      TAG="$2"
      shift 2
      ;;
    -n|--name)
      IMAGE_NAME="$2"
      shift 2
      ;;
    -d|--dev)
      BUILD_TYPE="development"
      shift
      ;;
    -h|--help)
      echo "用法: $0 [選項]"
      echo "選項:"
      echo "  -t, --tag TAG     設置映像標籤 (默認: latest)"
      echo "  -n, --name NAME   設置映像名稱 (默認: next-template)"
      echo "  -d, --dev         構建開發環境"
      echo "  -h, --help        顯示此幫助信息"
      exit 0
      ;;
    *)
      echo -e "${RED}未知選項: $1${NC}"
      exit 1
      ;;
  esac
done

echo -e "${YELLOW}開始構建 Docker 映像...${NC}"
echo "映像名稱: $IMAGE_NAME"
echo "標籤: $TAG"
echo "構建類型: $BUILD_TYPE"

# 檢查 GH_TOKEN（如果需要）
if [[ "$BUILD_TYPE" == "production" && -z "$GH_TOKEN" ]]; then
  echo -e "${YELLOW}警告: GH_TOKEN 未設置，將跳過私有包配置${NC}"
fi

# 構建參數
BUILD_ARGS=""
if [[ -n "$GH_TOKEN" ]]; then
  BUILD_ARGS="$BUILD_ARGS --build-arg GH_TOKEN=$GH_TOKEN"
fi

# 構建映像
if [[ "$BUILD_TYPE" == "development" ]]; then
  echo -e "${GREEN}構建開發環境映像...${NC}"
  docker build --target deps -t "$IMAGE_NAME:$TAG-dev" $BUILD_ARGS .
else
  echo -e "${GREEN}構建生產環境映像...${NC}"
  docker build -t "$IMAGE_NAME:$TAG" $BUILD_ARGS .
fi

echo -e "${GREEN}Docker 映像構建完成！${NC}"
echo "映像: $IMAGE_NAME:$TAG"

# 顯示映像信息
echo -e "${YELLOW}映像信息:${NC}"
docker images "$IMAGE_NAME:$TAG" 
