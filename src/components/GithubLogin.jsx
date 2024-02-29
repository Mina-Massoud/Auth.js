import React from "react";
import { FaGithub } from "react-icons/fa";
import { auth, signIn, signOut } from "../lib/auth";

export default async function GithubLogin() {
  const session = await auth();

  async function handleGithubLogin() {
    "use server";
    if (session) {
      await signOut();
      return;
    }
    await signIn("github");
  }

  return (
    <div className="flex w-full items-center flex-col gap-[4em] justify-center py-[5em]">
      <h1 className="text-[2rem] font-bold uppercase">Github Login</h1>
      <form action={handleGithubLogin}>
        <button className="border border-gray-600 flex items-center gap-[10px] px-[2.5em] py-[0.5em] rounded-sm">
          <FaGithub size={30} />{" "}
          {!session ? "Sign in with GitHub" : "Sign out first"}
        </button>
      </form>
      <p>{session ? "You are logged in" : "You are not logged in"}</p>
    </div>
  );
}
