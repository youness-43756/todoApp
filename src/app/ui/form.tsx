
export default function Form() {
    return (
        <form className="gap-2 justify-between hidden">
            <div className="flex-1">
                <label htmlFor="inputField" className="text-sm font-medium">What do you want todo today?</label>
                <input
                    required
                    type="text"
                    id="inputField"
                    placeholder="Type here..."
                    className="w-full px-4 h-11 rounded-lg shadow-sm bg-base-200 outline outline-amber-400 outline-2 focus:outline-amber-200 focus:outline-4" />
            </div>
            <div className="flex items-end">
                <button className="bg-blue-500 h-11 px-6 rounded-lg">Add</button>
            </div>
        </form>
    )
}
