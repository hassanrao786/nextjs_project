

import { url } from "inspector"
import { NextRequest, NextResponse } from "next/server"
import Login from "./app/login/page"



export const middleware=async(request:NextRequest)=>{
    const token=request.cookies.get("usertoken")?.value /////string or un defind token
    const {pathname,origin}=request.nextUrl;
console.log(token)

try {
    if(pathname==="/login"){
        if(token) return NextResponse.redirect(`${origin}`)
        return NextResponse.next()
    }
    if(!token) return NextResponse.redirect("http://localhost:3000/login")
} catch (error) {

}
}





////////////////////////////////////////////////////














// export const middleware = (request:NextRequest) => {

// const pathname = request.nextUrl.pathname

//     const isLoggedIn = true

//     if(isLoggedIn){
//         if(pathname=='/login'){
//             return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
//         } else{
//             return NextResponse.next()
//         }
//     }

//     else if (!isLoggedIn){
//         if(pathname != '/login'){
//             return NextResponse.redirect(new URL('/login', request.nextUrl))
//         }
//     }  

// }


// export const config = {
//     matcher : ['/login', '/dashboard', '/about', '/']
// }


   







