import { getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import SessionProvider from "@/components/SessionProvider";
import { Login } from "@/components/login";

export default function App() {
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
      {session ? <p>hey</p> : <Login />}
    </SessionProvider>
  );
}
