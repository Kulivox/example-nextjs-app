import {CompleteTodo} from "@/app/complete-todo";

export type TodoProps = {
    id: string;
    title: string;
    completed: boolean;

}
export const Todo = ({id, title, completed}: TodoProps) => {
    return (
        <div className="flex flex-row justify-between rounded border-blue-400 bg-blue-400 p-2 border-2">
            <h3 className="font-bold flex content-center">{title}</h3>
            <CompleteTodo id={id} />
        </div>
    );
}