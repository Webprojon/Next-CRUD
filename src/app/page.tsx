import { FaListCheck } from "react-icons/fa6";
import TasksList from "./tasks/page";
import SelectForm from "@/components/select-priority";
import prisma from "@/lib/db";
import { Suspense } from "react";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const tasks = await prisma.tasks.findMany();
	return (
		<section className="bg-black/40 backdrop-blur-sm w-[70%] mt-[7rem] mx-auto">
			<header className="flex items-center justify-between border-b border-gray-600 p-4">
				<div className="flex items-center">
					<FaListCheck className="size-7 text-gray-400 mr-3" />
					<h1 className="text-gray-400 text-2xl font-semibold">Tasks List</h1>
				</div>
				<SelectForm />
			</header>

			<Suspense fallback="Loading">
				<TasksList tasks={tasks} />
			</Suspense>
		</section>
	);
}
