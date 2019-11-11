const azure = require('azure-sb')

module.exports = options => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.connectionString) {
    throw Error('Missing required input: options.connectionString')
  }
  if (!options.topicName && !options.queueName) {
    throw Error('Missing required input: missing options.topicName or options.queueName')
  }

  const sbService = azure.createServiceBusService(options.connectionString)

  return (messageBody) => {
    return new Promise((resolve, reject) => {
      if (!messageBody) {
        throw Error('Missing required input: messageBody')
      }
      const message = {
        ...options.settings,
        body: JSON.stringify(messageBody),
        contentType: 'application/json'
      }
      if (options.queueName) {
        sbService.sendQueueMessage(options.queueName, message, error => {
          return error ? reject(error) : resolve(message)
        })
      } else if (options.topicName) {
        sbService.sendTopicMessage(options.topicName, message, error => {
          return error ? reject(error) : resolve(message)
        })
      }
    })
  }
}
