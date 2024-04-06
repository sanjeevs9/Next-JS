"use server"
import axios from "axios";
import client from "@/db/index"

export default async function post(username:string,password:string){
    
   try{
  const value=  await client.user.create({
        data:{
            username:username,
            password:password
        }
    })
    return true
   }catch(e){
    return false
   }
}