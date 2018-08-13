const kafka = require('kafka-node'),
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient({ kafkaHost: '192.168.99.102:9092' }),
  producer = new kafka.Producer(client),
  consumer = new kafka.Consumer(client, [{ topic: 'foo', partition: 0 }], {
    autoCommit: false
  }),
  km = new KeyedMessage('key', 'message'),
  payloads = [
    { topic: 'foo', messages: 'hi', partition: 0 },
    // { topic: 'topic2', messages: ['hello', 'world', km] }
  ];
producer.on('ready', function() {
  producer.send(payloads, function(err, data) {
    console.log('producer: ', err, data);
  });
});

consumer.on('message', function(message) {
  console.log('consumer: ', message);
});

producer.on('error', function(err) {});
