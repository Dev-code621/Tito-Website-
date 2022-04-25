echo "Running Server Container..."
echo ">>> Running Image"

docker run \
    -d \
    --name=vue-website \
    -p 8080:8080/tcp \
    --init \
    --network host \
    -di \
    --rm \
   vue-website 

docker ps
exit