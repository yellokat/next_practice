import connectDB from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    let client = await connectDB;
    let db = client.db("forum")
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}