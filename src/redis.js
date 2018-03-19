import redis from 'redis'

const client = redis.createClient(
  process.env.REDIS_PORT || 6379,
  process.env.REDIS_HOST || 'localhost',
)

client.on('error', err => {
  console.log(err)
})

export default client
