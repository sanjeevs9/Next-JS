import { get } from "http"
import { NextRequest } from "next/server"

export async function GET(){
    return Response.json({
        name:"sanjeev",
        email:"sanjeev@gmail.com"
    })
}

export async function POST(req:NextRequest){
    const body =await req.json();
    console.log(body)

    return Response.json({
        message:"you are able to post the data"
    })
}