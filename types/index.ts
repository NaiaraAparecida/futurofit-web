// types/index.ts

export type TaskDTO = {
    id: string;
    title: string;
    description?: string | null;
    status: "pending" | "done" | string;
    learningPathId?: string;
};

export type LearningPathDTO = {
    id: string;
    title: string;
    description: string;
    level: string; // "beginner" | "intermediate" | "advanced" | etc.
    tasks: TaskDTO[];
};
