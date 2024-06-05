import { Button } from "@/ui/Button/button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-16 bg-black flex flex-col gap-5 flex-wrap justify-center items-center">
      <div className="font-bold text-8xl text-amber-400 tracking-wide">
        Taskify
      </div>
      <p className="text-xl max-w-80 text-center">
        Create Task, Arrange, Manage, Get done with task with easeee!
      </p>
      <Link href={"/dashboard"}>
        <Button className="gap-1 items-center">
          Get Started <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>
      </Link>
    </main>
  );
}
