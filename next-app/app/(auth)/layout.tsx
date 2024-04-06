import React from "react"

export default function SigninLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <div className="bg-yellow-200 py-2 text-center">
            <span>
                    Login now to get 20% off
            </span>
            </div>
            {children}
        </>
    )
}