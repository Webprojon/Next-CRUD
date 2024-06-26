"use client";
import FormTaskInputs from "@/actions/create-task";
import DeleteTaskIcon from "@/components/delete-task";
import UpdateTaskIcon from "@/components/update-task";
import { useGlobalContext } from "@/context/global-context";
import { useEffect, useState } from "react";

interface TasksType {
	id: string;
	member: string;
	task: string;
	priority: string;
	iscompleted: boolean;
}

export default function TasksList({ tasks }: any) {
	const { selectValue } = useGlobalContext();
	const [filteredtasks, setFilteredTasks] = useState(tasks || []);

	useEffect(() => {
		const handleFilterBySelectValue = (selectValue: string) => {
			const categories: { [key: string]: string } = {
				high: "High priority",
				middle: "Middle priority",
				low: "Low priority",
			};

			return selectValue in categories
				? tasks.filter(
						(product: any) => product.priority === categories[selectValue],
				  )
				: tasks;
		};

		const filteredItems = handleFilterBySelectValue(selectValue);
		setFilteredTasks(filteredItems);
	}, [selectValue, tasks]);

	return (
		<div>
			<main className="p-4 pt-6">
				<div className="bg-black/20 w-full p-4">
					<ul className="flex justify-between tracking-wider font-semibold text-gray-400">
						<li>Team Member</li>
						<li>Tasks</li>
						<li>Priority</li>
						<li>Actions</li>
						<li>Date</li>
					</ul>
				</div>

				<div className="w-full p-4 h-[30vh] overflow-y-scroll no-scrollbar">
					{filteredtasks.map((task: TasksType) => (
						<ul
							key={task.id}
							className="flex items-center justify-between tracking-wider text-gray-400"
						>
							<li className="w-[10rem]">{task.member}</li>
							<li className="w-[11rem]">{task.task}</li>
							<li
								className={`w-[10rem] text-gray-300 px-4 py-[.2rem] rounded-md my-2 ${
									task.priority == "High priority"
										? "bg-lime-600"
										: task.priority == "Middle priority"
										? "bg-amber-600"
										: "bg-red-700"
								}`}
							>
								{task.priority}
							</li>
							<li className="w-[4rem] flex items-center gap-x-4 cursor-pointer">
								<UpdateTaskIcon taskId={task.id} />
								<DeleteTaskIcon taskId={task.id} />
							</li>
							<li>Mon, June 20</li>
						</ul>
					))}
				</div>
			</main>

			<footer className="flex items-center justify-between p-4 border-t border-gray-600">
				<form action={FormTaskInputs} className="flex justify-between w-full">
					<div className="flex gap-x-7">
						<input
							type="text"
							required
							name="member"
							autoComplete="off"
							placeholder="Member name"
							className="font-semibold bg-transparent border border-gray-600 px-3 py-1 tracking-wider focus:outline-none text-gray-400"
						/>
						<input
							type="text"
							required
							name="task"
							autoComplete="off"
							placeholder="Enter your task"
							className="font-semibold bg-transparent border border-gray-600 px-3 tracking-wider focus:outline-none text-gray-400"
						/>
						<select
							name="priority"
							className="appearance-none border rounded-sm py-[.2rem] pl-3 tracking-wider
				    bg-transparent border-gray-600 text-gray-400 font-semibold cursor-pointer focus:outline-none"
						>
							.<option value="High priority">High priority</option>
							<option value="Middle priority">Middle priority</option>
							<option value="Low priority">Low priority</option>
						</select>
					</div>

					<div className="flex gap-x-5">
						<button
							type="reset"
							className="border border-gray-600 py-1 px-4 font-bold text-gray-400 rounded-sm"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="bg-cyan-700 py-1 px-4 font-bold text-gray-200 rounded-sm"
						>
							Add Task
						</button>
					</div>
				</form>
			</footer>

			<div className="absolute -bottom-6 flex justify-between w-full text-sm text-gray-500 font-medium tracking-wider">
				<p>Built by Tokhirjon ❤️</p>
				<p>
					<span>{tasks.length}</span> Active tasks
				</p>
			</div>
		</div>
	);
}
