cd /home/gitlab/src/vue-site
git pull

echo "Building Server Container..."
docker stop vue-website || true
docker rm vue-website || true
echo ">>> Running docker build"
docker build \
    --tag vue-website:latest \
    .

echo ">> Image built"
echo "Done. Exiting."
exit