interface TaskBase {
    id: string;
    name: string;
    description: string;
}

export interface SingleTask extends TaskBase {
    createdAt: Date;
    finishedAt: Date | null;
}

export interface TaskRes extends TaskBase {
    createdAt: string;
    finishedAt: string | null;
}

export interface TaskToCreate {
    name: string;
    description: string;
}

export interface TaskStatusReq {
    finishedAt: Date | null;
}