import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const initialTasks: Prisma.TasksCreateInput[] = [
	{
		member: "Alex",
		task: "Going to school",
		priority: "High priority",
	},
	{
		member: "John",
		task: "Reading books",
		priority: "Middle priority",
	},
	{
		member: "Joanna",
		task: "Going to gym",
		priority: "Low priority",
	},
];

async function main() {
	for (const task of initialTasks) {
		const newProduct = await prisma.tasks.create({
			data: task,
		});
		console.log(`Created product with ID: ${newProduct.id}`);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
