import connectDB from './util/database.js'
import List from './list/page.js'
export default async function Home() {
  let client = await connectDB;
  let db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div>
       <List/>
    </div>
  );
}
