import NewTodoForm from "@/app/ui/account/form";

export default function page() {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">New Todo</h1>
            <NewTodoForm />
        </div>
    )
}
