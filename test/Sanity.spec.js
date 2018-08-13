// const kafka = require('kafka-node'),
//   KeyedMessage = kafka.KeyedMessage,
//   client = new kafka.KafkaClient({ kafkaHost: 'localhost:29092' }),
//   producer = new kafka.Producer(client),
//   consumer = new kafka.Consumer(client, [{ topic: 'topic1', partition: 0 }], {
//     autoCommit: false
//   }),
//   km = new KeyedMessage('key', 'message'),
//   payloads = [
//     { topic: 'topic1', messages: 'hi', partition: 0 },
//     { topic: 'topic2', messages: ['hello', 'world', km] }
//   ];

// // consumer.on('message', function (message) {
// // console.log('consumer: ', message);
// // });

// // producer.on('error', function (err) { })

describe('Sanity', () => {
  it('producer can send', () => {
    // producer.on('ready', function() {
    //   producer.send(payloads, function(err, data) {
    //     console.log('producer: ', err, data);
    //     done();
    //   });
    // });
  })
});
