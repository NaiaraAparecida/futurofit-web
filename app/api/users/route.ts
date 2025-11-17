import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
        return NextResponse.json({ error: "name and email required" }, { status: 400 });
    }

    const user = await prisma.user.create({
        data: { name, email },
    });

    return NextResponse.json(user, { status: 201 });
}