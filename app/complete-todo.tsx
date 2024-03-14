'use client'

import {completeTodo} from "@/app/actions";

export type CompleteTodoProps = {
    id: string;
}
export const CompleteTodo = ({id}: CompleteTodoProps) => {
  return <button className="p-2 bg-white rounded" onClick={async () => completeTodo(id)}>Complete</button>
}