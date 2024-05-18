'use client'
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
export default function SessionProvider({children,session}){
    return(
        <Provider>
            {children}
        </Provider>
    )
}