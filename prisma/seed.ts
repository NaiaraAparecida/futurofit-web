// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Criar habilidades (mantive como _soft/_digital só pra não dar warning de ESLint)
    const _soft = await prisma.skill.create({
        data: { name: "Comunicação", category: "soft" },
    });

    const _digital = await prisma.skill.create({
        data: { name: "Excel", category: "digital" },
    });

    // Criar trilha 1
    const _lp1 = await prisma.learningPath.create({
        data: {
            title: "Transição para Dados",
            description: "Fundamentos essenciais para migrar para a área de dados.",
            level: "beginner",
            tasks: {
                create: [
                    {
                        title: "O que é Data Analytics?",
                        description: "Entenda os conceitos básicos de análise de dados.",
                        status: "pending",
                    },
                    {
                        title: "Fundamentos de SQL",
                        description: "Aprenda a consultar dados em bancos relacionais.",
                        status: "pending",
                    },
                ],
            },
        },
    });

    // Criar trilha 2
    const _lp2 = await prisma.learningPath.create({
        data: {
            title: "Habilidades Digitais",
            description: "Ferramentas e práticas para o trabalho remoto.",
            level: "beginner",
            tasks: {
                create: [
                    {
                        title: "Organização com Notion",
                        description:
                            "Configure um workspace simples para organizar estudos e tarefas.",
                        status: "done",
                    },
                    {
                        title: "Comunicação assíncrona",
                        description:
                            "Pratique como se comunicar bem em times remotos e distribuídos.",
                        status: "pending",
                    },
                ],
            },
        },
    });

    console.log("Seed concluído!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());

