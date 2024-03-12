import prisma from "@/lib/prisma";
import {Todo} from "@/app/todo";


export async function Todos() {
    const todos = await prisma.todo.findMany();

    return (
        <div className="flex flex-col space-y-3 w-full">
            {todos.map(({id, title, completed}) => (
                <Todo key={id} id={id} title={title} completed={completed} />
            ))}
        </div>
    );
}