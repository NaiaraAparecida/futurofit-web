import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
    params: { id: string };
}

export async function POST(req: Request, { params }: Params) {
    const { id } = params;

    const task = await prisma.task.findUnique({ where: { id } });

    if (!task) {
        return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    const newStatus = task.status === "done" ? "pending" : "done";

    const updated = await prisma.task.update({
        where: { id },
        data: { status: newStatus },
    });

    return NextResponse.json(updated);
}