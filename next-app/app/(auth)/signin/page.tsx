import axios from "axios";
import Signin from "components/Signin";
import client from "@/db/index"

async function detail(){
    const data=await client.user.findUnique({
        where:{
            username:"sanjeev"
        }
    })
   return data
}

export default async function SignInPage(){
    const user=await detail(); 
    return <>
    <div className="">
    {user?.username}
    <br/>
    {user?.password}
  
    </div>
    <Signin/>
    </>
}