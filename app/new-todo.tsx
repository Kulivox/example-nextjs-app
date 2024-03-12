'use client'
import {CreateTodo} from "@/app/actions";
// https://github.com/facebook/react/issues/27876
export const NewTodo = () => {
    return (
        <form className="flex w-full flex-row space-x-4" action={CreateTodo} >
            <input
            id={"title"}
            name={"title"}
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