import { MongoClient } from 'mongodb'
import pw from '../auth/db'
const url = 'mongodb+srv://seungwon:'+pw+'@nextjstest.kwbmsfg.mongodb.net/?retryWrites=true&w=majority'
// const url = 'mongodb+srv://seungwon:jsw%241995@nextjstest.kwbmsfg.mongodb.net/?retryWrites=true&w=majority'
console.log(url)
const options = { useNewUrlParser: true }
let connectDB
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export default connectDB