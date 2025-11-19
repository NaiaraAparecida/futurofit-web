// app/(app)/dashboard/page.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DashboardPage() {
    const paths = await prisma.learningPath.findMany({
        include: { tasks: true },
    });

    const allTasks = paths.flatMap((p) => p.tasks);
    const done = allTasks.filter((t) => t.status === "done").length;
    const total = allTasks.length || 1;
    const progress = Math.round((done / total) * 100);

    return (
        <section aria-labelledby="dashboard-title">
            <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 id="dashboard-title" className="text-2xl font-semibold">
                        Sua jornada no Futuro do Trabalho
                    </h1>
                    <p className="mt-1 text-sm text-slate-300">
                        Acompanhe suas trilhas e tarefas focadas em habilidades digitais e
                        colaborativas.
                    </p>
                </div>

                <Link
                    href="/skills"
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
                >
                    Ajustar skills
                </Link>
            </header>

            {/* Card de progresso */}
            <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs text-slate-400">Progresso geral</p>
                    <p className="mt-2 text-3xl font-semibold">{progress}%</p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                            className="h-2 rounded-full bg-emerald-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                        {done} de {total} tarefas concluídas
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 md:col-span-2">
                    <p className="font-medium text-slate-100">
                        Próximos passos sugeridos
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs">
                        <li>Reforce habilidades digitais básicas (SQL, Git, Excel).</li>
                        <li>Pratique comunicação assíncrona e colaboração remota.</li>
                        <li>Inclua uma trilha focada em IA generativa e automação.</li>
                    </ul>
                </div>
            </div>

            {/* Trilhas */}
            <div className="space-y-4">
                {paths.map((path) => {
                    const totalTasks = path.tasks.length || 1;
                    const doneTasks = path.tasks.filter((t) => t.status === "done").length;
                    const localProgress = Math.round((doneTasks / totalTasks) * 100);

                    return (
                        <article
                            key={path.id}
                            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                            aria-label={`Trilha ${path.title}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold">{path.title}</h2>
                                    <p className="mt-1 text-sm text-slate-300">
                                        {path.description}
                                    </p>
                                    <p className="mt-2 text-xs text-slate-400">
                                        Nível: {path.level}
                                    </p>
                                </div>
                                <div className="hidden text-right text-xs text-slate-300 md:block">
                                    <p>{localProgress}%</p>
                                    <p>
                                        {doneTasks}/{totalTasks} tarefas
                                    </p>
                                </div>
                            </div>

                            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                <div
                                    className="h-1.5 rounded-full bg-emerald-500"
                                    style={{ width: `${localProgress}%` }}
                                />
                            </div>

                            <ul className="mt-3 space-y-1 text-sm text-slate-200">
                                {path.tasks.map((task) => (
                                    <li
                                        key={task.id}
                                        className="flex items-center justify-between rounded-lg bg-slate-900/60 px-2 py-1"
                                    >
                                        <span>{task.title}</span>
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-xs ${task.status === "done"
                                                    ? "bg-emerald-600/70 text-emerald-50"
                                                    : "bg-slate-800 text-slate-200"
                                                }`}
                                        >
                                            {task.status === "done" ? "Concluída" : "Pendente"}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
