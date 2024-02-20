import Link from "next/link";
import { comfortaa } from "./ui/font";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className=" flex flex-col min-h-screen p-6">
      <div className="flex items-end shrink-0 bg-amber-500 rounded-lg h-20 md:h-52 p-4">
        <span className={`${comfortaa.className} text-neutral-100 text-2xl md:text-3xl font-black`}>Todo App</span>
      </div>
      <div className="mt-4 grow flex flex-col md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${comfortaa.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}><strong>Welcome to Todo App.</strong> This is an example of todo app with database.</p>
          <Link href={'/login'} className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400 md:text-base transition-colors">
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="md:w-3/5 bg-emerald-500">Image.</div>
      </div>
    </main>
  );
}
