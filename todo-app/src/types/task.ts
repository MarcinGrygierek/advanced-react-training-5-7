export interface Task {
    id: string;
    name: string;
    createdAt: Date;
    finishedAt?: Date;
}