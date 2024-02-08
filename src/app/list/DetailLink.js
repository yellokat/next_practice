'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(props){
    let router = useRouter()
    return(
        <div>
            <button onClick={()=>{router.push('/')}}>자세히 보기</button>
        </div>
    )
}