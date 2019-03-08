const azure = require('azure-sb')

module.exports = options => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.connectionString) {
    throw Error('Missing required input: options.connectionString')
  }

  const sbService = azure.createServiceBusService(options.connectionString)

  return (messageBody) => {
    return new Promise(async (resolve, reject) => {
      if (!messageBody) {
        throw Error('Missing required input: messageBody')
      }
      const message = {
        ...options.settings,
        body: JSON.stringify(messageBody),
        contentType: 'application/json'
      }
      sbService.sendQueueMessage(options.queueName, message, error => {
        return error ? reject(error) : resolve(message)
      })
    })
  }
}
