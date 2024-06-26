"use client";
import DeleteTask from "@/actions/delete-task";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface DeleteTaskIconProps {
	taskId: string;
}

export default function DeleteTaskIcon({ taskId }: DeleteTaskIconProps) {
	const handleDeleteTask = () => {
		DeleteTask(taskId);
	};

	return (
		<RiDeleteBin5Fill
			onClick={handleDeleteTask}
			className="size-6 text-red-700"
		/>
	);
}
