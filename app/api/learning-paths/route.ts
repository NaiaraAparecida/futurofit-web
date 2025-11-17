import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const paths = await prisma.learningPath.findMany({
        include: {
            tasks: true,
        },
    });

    return NextResponse.json(paths);
}