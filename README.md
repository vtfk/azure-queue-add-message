
[![Build Status](https://travis-ci.com/telemark/azure-queue-add-message.svg?branch=master)](https://travis-ci.com/telemarks/azure-queue-add-message)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azure-queue-add-message

Convenience wrapper for adding json messages to [Azure service bus queues or topics](https://docs.microsoft.com/en-us/azure/service-bus-messaging/).

## Usage

```JavaScript
(async () => {
  const azureQueue = require('azure-queue-add-message')({
    connectionString: '<myConnectionString>',
    queueName: 'myQueueName', // queueName or topicName is required
    topicName: 'myTopicName' // queueName or topicName is required
  })
  const message = {
    id: 123,
    action: 'add',
    content: 'Added to queue'
  }
  try {
    const result = await azureQueue(message)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
```

# License

[MIT](LICENSE)
