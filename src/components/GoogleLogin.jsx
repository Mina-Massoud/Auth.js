import { auth, signIn, signOut } from "@/lib/auth";
import React from "react";
import { FaGoogle } from "react-icons/fa";
export default async function GoogleLogin() {
  const session = await auth();

  async function handleGoogleLogin() {
    "use server";
    if (session) {
      await signOut();
      return;
    }
    await signIn("google");
  }

  return (
    <div className="flex w-full items-center flex-col gap-[4em] justify-center py-[5em]">
      <h1 className="text-[2rem] font-bold uppercase">Google Login</h1>
      <form action={handleGoogleLogin}>
        <button className="border border-gray-600 flex items-center gap-[10px] px-[2.5em] py-[0.5em] rounded-sm">
          <FaGoogle size={20 } />{" "}
          {!session ? "Sign in with Google" : "Sign out first"}
        </button>
      </form>
    </div>
  );
}
