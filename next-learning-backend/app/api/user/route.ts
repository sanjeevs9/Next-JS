import { get } from "http"
import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function GET(){
    const client = new PrismaClient()
    const user = await client.user.findFirst({});

    return Response.json({
        name:user?user:null
    })
    
    // return Response.json({
    //     name:"sanjeev",
    //     email:"sanjeev@gmail.com"
    // })
}

export async function POST(req:NextRequest){
    const body =await req.json();
    try{
        
        console.log(body)
        const user =await client.user.create({
            data:{
                username:body.email,
                password:body.password
            }
        });
        return Response.json({
            
            message:"User signed up",
            user:user
        })

    }catch(error){
       
    return Response.json({
        message:"Failed"
    })
    }
}