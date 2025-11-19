// app/(app)/skills/page.tsx
"use client";

import { useEffect, useState } from "react";

type UserSkill = {
    id: string;
    skill: { name: string };
    level: string;
};

export default function SkillsPage() {
    const [skills, setSkills] = useState<UserSkill[]>([]);
    const [name, setName] = useState("");
    const [level, setLevel] = useState("beginner");
    const [loading, setLoading] = useState(false);

    async function loadSkills() {
        const res = await fetch("/api/me/skills");
        if (!res.ok) return;
        const data = await res.json();
        setSkills(data);
    }

    useEffect(() => {
        loadSkills();
    }, []);

    async function handleAdd(e: React.FormEvent) {
        e.preventDefault();
        if (!name.trim()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/me/skills", {
                method: "POST",
                body: JSON.stringify({ name, level }),
                headers: { "Content-Type": "application/json" },
            });
            if (res.ok) {
                setName("");
                setLevel("beginner");
                await loadSkills();
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <section aria-labelledby="skills-title">
            <header className="mb-4">
                <h1 id="skills-title" className="text-2xl font-semibold">
                    Skills do Futuro
                </h1>
                <p className="mt-1 text-sm text-slate-300">
                    Mapeie habilidades essenciais para se manter relevante em um mercado
                    cada vez mais automatizado.
                </p>
            </header>

            <form
                onSubmit={handleAdd}
                className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm md:flex-row md:items-end"
                aria-label="Adicionar nova skill"
            >
                <div className="flex-1">
                    <label className="mb-1 block text-xs text-slate-300" htmlFor="skill-name">
                        Nome da skill
                    </label>
                    <input
                        id="skill-name"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-500"
                        placeholder="Ex: SQL, Comunicação assíncrona, Git..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-xs text-slate-300" htmlFor="skill-level">
                        Nível
                    </label>
                    <select
                        id="skill-level"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-500"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option value="beginner">Iniciante</option>
                        <option value="intermediate">Intermediário</option>
                        <option value="advanced">Avançado</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
                >
                    {loading ? "Adicionando..." : "Adicionar skill"}
                </button>
            </form>

            <ul className="space-y-2 text-sm">
                {skills.map((s) => (
                    <li
                        key={s.id}
                        className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2"
                    >
                        <span>{s.skill.name}</span>
                        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">
                            {s.level === "beginner"
                                ? "Iniciante"
                                : s.level === "intermediate"
                                    ? "Intermediário"
                                    : "Avançado"}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
