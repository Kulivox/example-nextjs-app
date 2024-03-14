'use server'
import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export const CreateTodo = async (formData: FormData) => {
    await prisma.todo.create({
        data: {
            title: formData.get('title')?.toString() ?? "",
        }
    });

    revalidatePath("/", "page");
}

export const completeTodo = async (id: string) => {
    await prisma.todo.update({
        where: {
            id
        },
        data: {
            completed: true
        }
    });

    revalidatePath("/", "page");
}