import GithubLogin from "@/components/GithubLogin";
import SpotLight from "@/components/SpotLight";
import Image from "next/image";
import { auth } from "../lib/auth";
import GoogleLogin from "@/components/GoogleLogin";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-[100vh] flex items-center flex-col justify-center relative">
      <code className="max-w-[500px] text-[1.2rem] bg-gray-900 p-[1em] rounded-md sticky z-[555] top-[2em]">
        {session ? session.user.name : "No session"}
      </code>
      <SpotLight />
      <GithubLogin />
      <GoogleLogin />
    </div>
  );
}
