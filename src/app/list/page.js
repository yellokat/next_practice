import connectDB from "../util/database";
export default async function List() {

    let client = await connectDB;
    let db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {result.map((e, i)=>
                <div className="list-item">
                    <h4>{e.title}</h4>
                    <p>{e.content}</p>
                </div>    
            )}
        </div>
    )
}