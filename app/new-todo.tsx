export const NewTodo = () => {
    return (
        <form className="flex w-full flex-row space-x-4">
            <input
            type="text"
            className="border border-gray-300 rounded-md p-2 flex-1"
            placeholder="Title"
            />
            <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2"
            >
            Create
            </button>
        </form>
    );
}