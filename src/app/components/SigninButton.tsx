"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function SigninButton() {
  const { data: session } = useSession();
  if (session) {
    // console.log(session.user?.image);
    return (
      <>
        {/* Signed in as {session?.user?.name} <br /> */}
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      {/* Login <br /> */}
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
