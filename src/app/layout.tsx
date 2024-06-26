import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "@/context/global-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next CRUD App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-800`}>
				<div className="animate-spin-25s fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#673b73]"></div>
				<div className="animate-spin-25s fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#494579]"></div>
				<GlobalContextProvider>{children}</GlobalContextProvider>
			</body>
		</html>
	);
}
