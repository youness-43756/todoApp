interface cardprops {
    children: React.ReactNode,
    bgColor: string
}

export default function Card({ children, bgColor }: cardprops) {
    const background = bgColor ? bgColor : "bg-gray-50"
    return (
        <div className={`relative flex items-center justify-center md:w-56 w-full grow md:max-w-80 aspect-square rounded-lg p-4 shadow-sm cursor-pointer text-gray-800 overflow-hidden ${background}`}>{children}</div>
    )
}
