import Image from "next/image";
import {NewTodo} from "@/app/new-todo";
import React from "react";
import {Todos} from "@/app/todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-3 justify-start p-24">
      <div className="w-full h-[calc(100vh-20rem)] overflow-auto">
          <Todos />
      </div>
      <div className="w-full sticky bottom-20 ">
          <NewTodo />
      </div>
    </main>
  );
}
