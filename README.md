[![Build Status](https://travis-ci.com/telemark/azure-queue-add-message.svg?branch=master)](https://travis-ci.com/telemarks/azure-queue-add-message)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azure-queue-add-message

Convenience wrapper for adding json messages to [Azure service bus queues](https://docs.microsoft.com/en-us/azure/service-bus-messaging/).

## Usage

```JavaScript
(async () => {
  const addMessage = require('azure-queue-add-message')
  const options = {
    connectionString: '<myConnectionString>',
    queueName: 'myQueueName',
    message: {
      id: 123,
      action: 'add',
      content: 'Added to queue'
    }
  }
  try {
    const result = await addMessage(options)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
```

# License

[MIT](LICENSE)
