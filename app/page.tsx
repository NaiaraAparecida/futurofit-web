import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-4 py-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            O Futuro do Trabalho
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Trilhe sua jornada de <span className="text-emerald-400">recolocação</span>{" "}
            com clareza e dados.
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            A Ana, 32 anos, está migrando de administrativo para tecnologia. O
            FuturoFit organiza suas trilhas de aprendizado, tarefas e skills para
            que ela se prepare para um mercado cada vez mais automatizado e digital.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/dashboard"
              className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 hover:bg-emerald-400"
            >
              Entrar na Jornada
            </Link>
            <a
              href="#como-funciona"
              className="rounded-lg border border-slate-700 px-4 py-2 text-slate-200 hover:border-emerald-400 hover:text-emerald-400"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div
          className="mt-10 w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur md:mt-0"
          aria-label="Resumo visual da jornada da Ana"
        >
          <p className="text-xs text-slate-400">Jornada da Ana</p>
          <p className="mt-1 text-sm font-medium">Transição para Dados</p>

          <div className="mt-4 space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Progresso</span>
                <span>42%</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: "42%" }}
                />
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-200">
              <li>✓ Fundamentos de Lógica</li>
              <li>✓ Excel para análise</li>
              <li>• SQL básico</li>
              <li>• Introdução a Data Warehouse</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

