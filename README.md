# Tycho


### Docker Kafka Setup for MacOS

```
docker-machine create --driver virtualbox --virtualbox-memory 6000 confluent
docker-machine env confluent
eval $(docker-machine env confluent)
docker network create confluent

# update /etc/hosts
# 192.168.99.102  zookeeper
# 192.168.99.102  kafka

docker run -d \
    --net=confluent \
    --name=zookeeper \
    -p 2181:2181 \
    -e ZOOKEEPER_CLIENT_PORT=2181 \
    confluentinc/cp-zookeeper:5.0.0

docker run -d \
    --net=confluent \
    --name=kafka \
    -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka:5.0.0

docker run \
  --net=confluent \
  --rm confluentinc/cp-kafka:5.0.0 \
  kafka-topics --create --topic foo --partitions 1 --replication-factor 1 \
  --if-not-exists --zookeeper zookeeper:2181

docker run \
  --net=confluent \
  --rm \
  confluentinc/cp-kafka:5.0.0 \
  kafka-topics --describe --topic foo --zookeeper zookeeper:2181

docker run \
  --net=confluent \
  --rm \
  confluentinc/cp-kafka:5.0.0 \
  bash -c "seq 42 | kafka-console-producer --request-required-acks 1 \
  --broker-list kafka:9092 --topic foo && echo 'Produced 42 messages.'"

docker run \
  --net=confluent \
  --rm \
  confluentinc/cp-kafka:5.0.0 \
  kafka-console-consumer --bootstrap-server kafka:9092 --topic foo --from-beginning --max-messages 42
```



```
git submodule update --init --recursive
npm i
npm run test
```

```
minikube start
helm init
helm install ./modules/cp-helm-charts
kubectl get pods
```

```
cd ./modules/kafka-streams-docker
docker-compuse up
```
