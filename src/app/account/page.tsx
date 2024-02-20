import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import Card from "../ui/card";
import { lobster } from "../ui/font";
const todos = [
    { id: '0', text: 'Go to gym at 9:00 AM', color: "bg-red-400" },
    { id: '1', text: 'Do home work', color: "bg-yellow-400" },
    { id: '2', text: 'Shopping', color: "bg-lime-400" },
    { id: '3', text: 'Learn programing language (Javascript)', color: "bg-gray-300" },
    { id: '4', text: 'Fix bathroom light', color: "bg-orange-400" },
    { id: '5', text: 'Go to party with friends', color: "" },
    { id: '6', text: 'Visit doctor', color: "bg-cyan-400" },
]
export default function Page() {
    return <div className="flex flex-col">
        <div className="mb-4">
            <p className="text-2xl font-medium text-gray-900">Today todos</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
            {
                todos.map(t => (
                    <Card key={t.id} bgColor={t.color}>
                        <p className={`${lobster.className} text-xl`}>{t.text}</p>
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-r from-gray-400 to-gray-100 rounded-ss-md shadow-lg shadow-gray-500"></div>
                        <div className="absolute bottom-4 text-gray-700 left-4 flex gap-3">
                            <PencilIcon className="w-6 text-green-800" />
                            <TrashIcon className="w-6 text-red-800" />
                        </div>
                    </Card>
                ))
            }
        </div>
    </div>
}