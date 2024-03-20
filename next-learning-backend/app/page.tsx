import axios from "axios";
import Image from "next/image";

interface user{
  email:string,
  name:string
}

async function detais(){
  return await axios.get("http://localhost:3000/api/user")
    .then(res=>{
      return res.data;
    })
}

export default async function Home() {
  const data=await detais();

  return (
    <> 
    <div className="h-screen flex justify-center items-center bg-red-50">

    
    <div className="flex h-60 w-60 border-spacing-1
     justify-center  flex-col items-center border-2" >
      <div className="flex items-center">
      {data.email}     
      </div>
    <div className="flex items-center">
    {data.name}
    </div>
    
    </div>
    </div>
    </>
      );
}
