// app/(app)/oportunidades/page.tsx
export default function OportunidadesPage() {
    const oportunidades = [
        {
            id: "1",
            titulo: "Analista de Dados Júnior",
            tipo: "Remoto",
            empresa: "Empresa X",
            match: 72,
        },
        {
            id: "2",
            titulo: "Desenvolvedora Front-end Júnior",
            tipo: "Híbrido",
            empresa: "Startup Y",
            match: 65,
        },
    ];

    return (
        <section aria-labelledby="oportunidades-title" className="space-y-4">
            <header>
                <h1 id="oportunidades-title" className="text-2xl font-semibold">
                    Oportunidades sugeridas
                </h1>
                <p className="mt-1 text-sm text-slate-300">
                    Sugestões fictícias de vagas alinhadas ao seu desenvolvimento no FuturoFit.
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
                {oportunidades.map((o) => (
                    <article
                        key={o.id}
                        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                        aria-label={`Vaga ${o.titulo}`}
                    >
                        <h2 className="text-sm font-semibold text-slate-50">
                            {o.titulo}
                        </h2>
                        <p className="mt-1 text-xs text-slate-400">
                            {o.empresa} · {o.tipo}
                        </p>
                        <p className="mt-3 text-xs text-slate-300">
                            Match aproximado com suas skills:{" "}
                            <span className="font-semibold text-emerald-400">
                                {o.match}%
                            </span>
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
