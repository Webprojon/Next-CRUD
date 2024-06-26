"use client";

import { useGlobalContext } from "@/context/global-context";

export default function SelectForm() {
	const { selectValue, setSelectValue } = useGlobalContext();
	const handleSelectValue = (event: any) => {
		setSelectValue(event.target.value);
	};

	return (
		<select
			value={selectValue}
			onChange={handleSelectValue}
			name="cateogry"
			className="appearance-none border rounded-sm py-[.2rem] pl-3 tracking-wider
				 bg-transparent border-gray-600 text-gray-400 font-semibold cursor-pointer focus:outline-none"
		>
			<option value="all">All priority</option>
			<option value="high">High priority</option>
			<option value="middle">Middle priority</option>
			<option value="low">Low priority</option>
		</select>
	);
}
