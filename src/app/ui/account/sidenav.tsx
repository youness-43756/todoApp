import Link from "next/link";
import TodoLogo from "../todo-logo";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/20/solid";

export default function SideNav() {
    return <div className="flex h-full flex-col px-3 py-4">
        <Link href={"/"} className="bg-amber-500 md:h-40 mb-2 flex h-20 items-end justify-start rounded-md p-4"><TodoLogo /></Link>

        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <form>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-500 p-3 text-sm font-medium hover:bg-red-400 text-white md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
            </form>
        </div>
    </div>
}