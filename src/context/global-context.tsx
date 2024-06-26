"use client";
import React, { useState, createContext, useContext } from "react";

type GlobalContextProviderProps = {
	children: React.ReactNode;
};

type GlobalDataType = {
	selectValue: string;
	setSelectValue: React.Dispatch<React.SetStateAction<string>>;
	isUpdated: boolean;
	setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultGlobalContextValue: GlobalDataType = {
	selectValue: "",
	setSelectValue: () => {},
	isUpdated: false,
	setIsUpdated: () => {},
};

const GlobalContext = createContext<GlobalDataType>(defaultGlobalContextValue);

export default function GlobalContextProvider({
	children,
}: GlobalContextProviderProps) {
	const [selectValue, setSelectValue] = useState<string>("");
	const [isUpdated, setIsUpdated] = useState<boolean>(false);

	const contextValue: GlobalDataType = {
		selectValue,
		setSelectValue,
		isUpdated,
		setIsUpdated,
	};
	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
}

export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
		console.warn("useGlobalContext must be used within GlobalContextProvider");
	}

	return context || defaultGlobalContextValue;
}
