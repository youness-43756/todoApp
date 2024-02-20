"use client"
import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/account', icon: HomeIcon },
    { name: 'New todo', href: '/account/new-todo', icon: PlusIcon },
    // { name: 'Uncompleted', href: '/account/uncompleted', icon: HomeIcon },
]

export default function NavLinks() {
    const pathname = usePathname()
    console.log(pathname)
    return <>
        {links.map(link => {
            const LinkIcon = link.icon;
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-100 hover:text-amber-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-amber-100 text-amber-600': pathname == link.href,
                        },
                    )}
                >
                    <LinkIcon className="w-6 block" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        })}
    </>

}