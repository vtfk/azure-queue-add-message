const test = require('ava')
const addMessage = require('../index')

test('it throws if no options', t => {
  const error = t.throws(() => addMessage())
  t.is(error.message, 'Missing required input: options')
})

test('it throws if missing connectionString', t => {
  const error = t.throws(() => addMessage({}))
  t.is(error.message, 'Missing required input: options.connectionString')
})

test('it throws if missing queueName or topicName', t => {
  const error = t.throws(() => addMessage({ connectionString: true }))
  t.is(error.message, 'Missing required input: missing options.topicName or options.queueName')
})
