import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
    const paths = await prisma.learningPath.findMany({
        include: { tasks: true },
    });

    return (
        <main className="min-h-screen bg-slate-950 text-slate-50">
            <section className="max-w-4xl mx-auto p-4">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold">Seu Futuro do Trabalho</h1>
                    <p className="mt-2 text-slate-300">
                        Acompanhe suas trilhas e tarefas para se preparar para as novas demandas do mercado.
                    </p>
                </header>

                <div className="space-y-4">
                    {paths.map((path) => (
                        <article
                            key={path.id}
                            className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                            aria-label={`Trilha ${path.title}`}
                        >
                            <h2 className="text-xl font-semibold">{path.title}</h2>
                            <p className="text-sm text-slate-300">{path.description}</p>

                            <ul className="mt-3 space-y-2">
                                {path.tasks.map((task) => (
                                    <li key={task.id} className="flex items-center justify-between">
                                        <span>{task.title}</span>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${task.status === "done" ? "bg-emerald-600" : "bg-slate-700"
                                                }`}
                                            aria-label={task.status === "done" ? "Concluída" : "Pendente"}
                                        >
                                            {task.status === "done" ? "Concluída" : "Pendente"}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}