"use client"

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-gray-50 rounded-full p-2 shadow-sm hover:scale-95 transition-all cursor-pointer" onClick={() => alert('Hello!')}>{children}</button>
    )
}
