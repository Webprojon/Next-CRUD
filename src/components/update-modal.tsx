"use client";
import UpdatedFormInputs from "@/actions/update-task";
import { useGlobalContext } from "@/context/global-context";

interface UpdateModalProps {
	taskId: string;
}

export default function UpdateModal({ taskId }: UpdateModalProps) {
	const { isUpdated, setIsUpdated } = useGlobalContext();
	return (
		<div>
			<div
				className={`${
					isUpdated ? "block" : "hidden"
				} fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[37%] h-[37vh] rounded-md p-4 bg-slate-700 `}
			>
				<form
					action={UpdatedFormInputs}
					className="flex flex-col justify-between h-[100%]"
				>
					<div className="w-full flex flex-col gap-y-4">
						<input type="hidden" name="taskId" value={taskId} />
						<input
							type="text"
							required
							name="updateMember"
							autoComplete="off"
							placeholder="Member name"
							className="font-semibold bg-transparent border border-gray-600 px-3 py-2 tracking-wider focus:outline-none text-gray-400"
						/>
						<input
							type="text"
							required
							name="updateTask"
							autoComplete="off"
							placeholder="Enter your task"
							className="font-semibold bg-transparent border border-gray-600 px-3 py-2 tracking-wider focus:outline-none text-gray-400"
						/>
						<select
							name="updatePriority"
							className="appearance-none border rounded-sm py-2 pl-3 tracking-wider
				    bg-transparent border-gray-600 text-gray-400 font-semibold cursor-pointer focus:outline-none"
						>
							.<option value="High priority">High priority</option>
							<option value="Middle priority">Middle priority</option>
							<option value="Low priority">Low priority</option>
						</select>
					</div>

					<div className="flex justify-end gap-x-5">
						<button
							onClick={() => setIsUpdated(!isUpdated)}
							type="reset"
							className="border border-gray-600 py-1 px-4 font-bold text-gray-400 rounded-sm"
						>
							Cancel
						</button>
						<button
							onClick={() => setIsUpdated(!isUpdated)}
							type="submit"
							className="bg-cyan-700 py-1 px-4 font-bold text-gray-200 rounded-sm"
						>
							Save Task
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
