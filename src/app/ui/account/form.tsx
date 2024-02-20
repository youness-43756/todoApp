
const colors = [
    { name: 'red', bgColor: 'bg-red-400' },
    { name: 'green', bgColor: 'bg-green-400' },
    { name: 'yellow', bgColor: 'bg-yellow-400' },
    { name: 'lime', bgColor: 'bg-lime-400' },
    { name: 'cyan', bgColor: 'bg-cyan-400' },
    { name: 'orange', bgColor: 'bg-orange-400' },
]

export default function NewTodoForm() {
    return (
        <form className="flex flex-col gap-4 md:max-w-md">
            <div className="flex-1">
                <label htmlFor="inputField" className="text-sm font-medium"><strong>What do you want todo today?</strong></label>
                <textarea
                    required
                    id="inputField"
                    placeholder="Type here..."
                    rows={5}

                    className="w-full px-4 py-2 rounded-lg shadow-sm bg-base-200 outline outline-amber-400 outline-1 focus:outline-amber-200 focus:outline-4"></textarea>
            </div>
            <div className="flex-1">
                <label htmlFor="inputField" className="text-sm font-medium"><strong>Choose a color:</strong> </label>
                <div className="flex gap-6 flex-wrap mt-1">
                    {
                        colors.map(color => (
                            <div key={color.name} className={`w-12 h-12 rounded-full cursor-pointer hover:border-2 border-zinc-800 ${color.bgColor}`}></div>
                        ))
                    }
                </div>
            </div>

            <div className="flex-1">
                <button className="bg-amber-500 hover:bg-amber-400 text-white text-sm font-medium h-11 px-6 rounded-lg w-full">Submit</button>
            </div>
        </form>

    )
}