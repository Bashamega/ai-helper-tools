import { getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import SessionProvider from "@/components/SessionProvider";
import { Signup } from "@/components/signup";

export default function RegisterPage() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setSession(session);
        };

        fetchSession();
    }, []);

    return (
        <SessionProvider session={session}>
            {session ? <p>You are already logged in</p> : <Signup />}
        </SessionProvider>
    );
}
