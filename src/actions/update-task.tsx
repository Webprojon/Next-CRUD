"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function UpdatedFormInputs(formData: FormData) {
	const taskId = formData.get("taskId") as string;
	const memberName = formData.get("updateMember") as string;
	const task = formData.get("updateTask") as string;
	const priority = formData.get("updatePriority") as string;

	try {
		await prisma.tasks.update({
			where: { id: taskId },
			data: {
				member: memberName,
				task: task,
				priority: priority,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.error("Prisma error code:", error.code);
		}
	}

	revalidatePath("/tasks");
}
