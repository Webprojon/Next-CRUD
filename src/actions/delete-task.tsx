"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function DeleteTask(taskId: string) {
	try {
		await prisma.tasks.delete({
			where: { id: taskId },
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/tasks");
}
