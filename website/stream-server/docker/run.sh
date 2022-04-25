echo "Running Server Container..."
echo ">>> Running Image"

docker run \
    -d \
    --name=streaming-server \
    -p 8342:8342/tcp \
    -p 55000-55020:55000-55020/tcp \
    -p 55000-55020:55000-55020/udp \
    --init \
    --network host \
    -di \
    --rm \
    streaming-server

docker ps
exit