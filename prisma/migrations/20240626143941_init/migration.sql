-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "member" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "iscompleted" BOOLEAN NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
