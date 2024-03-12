import Image from "next/image";
import {NewTodo} from "@/app/new-todo";
import React from "react";
import {Todos} from "@/app/todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-3 justify-start p-24">
      <Todos />
      <NewTodo />
    </main>
  );
}
