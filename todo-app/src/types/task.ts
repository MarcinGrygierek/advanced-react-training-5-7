export interface SingleTask {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    finishedAt: Date | null;
}