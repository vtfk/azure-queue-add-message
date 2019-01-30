const azure = require('azure-sb')

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    const sbService = azure.createServiceBusService(options.connectionString)
    const message = {
      ...options.settings,
      body: JSON.stringify(options.message),
      contentType: 'application/json'
    }
    sbService.sendQueueMessage(options.queueName, message, error => {
      return error ? reject(error) : resolve(message)
    })
  })
}
