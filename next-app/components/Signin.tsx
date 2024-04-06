"use client"

import post from "@/server/user";
import axios from "axios";
import React, { useState } from "react";
import { PassThrough } from "stream";


export default function Signin() {
    const[data,setdata]=useState({username:"",password:""})
   

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="username" placeholder="harkirat@gmail.com" data={data} setdata={setdata} />
                        <LabelledInput label="password" type={"password"} placeholder="123456" data={data} setdata={setdata}/>
                        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={()=>{
                            post(data.username,data.password)
                        }}>Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    data:{username:string,password:string},
    setdata: (value: { username: string; password: string }) => void;
}

function LabelledInput({ label, placeholder, type ,data,setdata}: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required 
        onChange={(e)=>{setdata({...data,[label]:e.target.value})}}/>
    </div>
}