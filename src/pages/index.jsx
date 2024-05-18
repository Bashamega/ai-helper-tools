
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import SessionProvider from "@/components/SessionProvider";
export default async function App(){
  const session = await getServerSession(authOptions)
  return(
   <SessionProvider session={session}>
    {!session?(
      <Login></Login>
    ):(
      <p>hey</p>
    )}
   </SessionProvider>
  )
}