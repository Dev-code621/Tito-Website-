cd /home/gitlab/src/stream-server
git pull

echo "Building Server Container..."
docker stop streaming-server || true
docker rm streaming-server || true
echo ">>> Running docker build"
echo "${SERVER_IP} is the IP"
ls
docker build \
    --build-arg NODE_ENV=${NODE_ENV} \
    --build-arg SERVER_IP=${SERVER_IP} \
    --tag streaming-server:latest \
    .

echo ">> Image built"
echo "Done. Exiting."
exit