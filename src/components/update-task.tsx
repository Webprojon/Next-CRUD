"use client";
import { FaEdit } from "react-icons/fa";
import UpdateModal from "./update-modal";
import { useGlobalContext } from "@/context/global-context";

export default function UpdateTaskIcon({ taskId }: any) {
	const { setIsUpdated } = useGlobalContext();
	return (
		<div className="relative">
			<FaEdit
				onClick={() => setIsUpdated(true)}
				className="size-6 text-cyan-600"
			/>
			<UpdateModal taskId={taskId} />
		</div>
	);
}
