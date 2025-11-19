// app/(app)/layout.tsx
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-4">
                <header className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold">
                            FF
                        </span>
                        <div>
                            <p className="text-sm font-semibold">FuturoFit</p>
                            <p className="text-xs text-slate-400">
                                Preparando você pro futuro do trabalho
                            </p>
                        </div>
                    </div>

                    <nav className="flex gap-4 text-sm">
                        <Link href="/dashboard" className="text-slate-200 hover:text-emerald-400">
                            Jornada
                        </Link>
                        <Link href="/skills" className="text-slate-200 hover:text-emerald-400">
                            Skills
                        </Link>
                        <Link href="/oportunidades" className="text-slate-200 hover:text-emerald-400">
                            Oportunidades
                        </Link>
                    </nav>
                </header>

                <main className="mt-6">{children}</main>
            </div>
        </div>
    );
}
