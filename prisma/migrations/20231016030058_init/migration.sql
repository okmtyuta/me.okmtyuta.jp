-- CreateTable
CREATE TABLE "DailyFeedback" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "posted" TIMESTAMP(3) NOT NULL,
    "retrospective" TEXT NOT NULL,

    CONSTRAINT "DailyFeedback_pkey" PRIMARY KEY ("id")
);
