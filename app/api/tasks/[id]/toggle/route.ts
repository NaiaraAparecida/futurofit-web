import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// O Next está esperando que "params" seja uma Promise<{ id: string }>
type ParamsPromise = Promise<{ id: string }>;

export async function POST(
    _req: NextRequest,
    context: { params: ParamsPromise }
) {
    // Em algumas versões do Next 16, "params" vem como Promise.
    const { id } = await context.params;

    if (!id) {
        return NextResponse.json(
            { error: "Missing task id" },
            { status: 400 }
        );
    }

    const task = await prisma.task.findUnique({
        where: { id },
    });

    if (!task) {
        return NextResponse.json(
            { error: "Task not found" },
            { status: 404 }
        );
    }

    const newStatus = task.status === "done" ? "pending" : "done";

    const updated = await prisma.task.update({
        where: { id },
        data: { status: newStatus },
    });

    return NextResponse.json(updated, { status: 200 });
}
