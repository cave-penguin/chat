import mongoose from 'mongoose'
import config from '../config'

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('db is connected')
})

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(`can not connect to db ${err}`)
  process.exit(1)
})

exports.connect = async (mongoURL = config.mongoURL) => {
  mongoose.connect(mongoURL)
  return mongoose.connection
}
