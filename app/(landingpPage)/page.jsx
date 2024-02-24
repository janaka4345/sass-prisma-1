"use client";
import { buttonVariants } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LandingPage() {
  const session = useSession();
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div>Landingp page</div>
      <Link className={buttonVariants()} href="/dashboard">
        dashboard
      </Link>
      <br />
      <Link href="/test">test</Link>
      <br />
      <Link href="/test2">test2</Link>
      <br />
      <Link href="/test3">test3</Link>
      <br />
      <Link href="/test4">test4</Link>
      <br />
      <Link href="/test5">test5</Link>
    </>
  );
}
