const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')
const Factory = use('Factory')

test('get list of users', async ({ client }) => {
  const user = await Factory
    .model('App/Models/User')
    .createMany(15)

  const response = await client.get('/users').end()

  response.assertStatus(200)
})

test('get specific user', async ({ client }) => {
  const user = await Factory
    .model('App/Models/User')
    .create()

  const response = await client.get('/users').end()

  response.assertStatus(200)
})
