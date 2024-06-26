"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function FormTaskInputs(formData: FormData) {
	const memberName = formData.get("member") as string;
	const task = formData.get("task") as string;
	const priority = formData.get("priority") as string;

	try {
		await prisma.tasks.create({
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
