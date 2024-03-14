import {CompleteTodo} from "@/app/complete-todo";

export type TodoProps = {
    id: string;
    title: string;
    completed: boolean;

}
export const Todo = ({id, title}: TodoProps) => {
    return (
        <div className="flex flex-row justify-between rounded border-blue-400 bg-blue-400 p-2 border-2">
            <span className={"flex flex-col justify-center"}>{title}</span>
            <CompleteTodo id={id} />
        </div>
    );
}