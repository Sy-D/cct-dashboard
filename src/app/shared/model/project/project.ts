export class Project {
    id!: number;
    client!: string;
    scope!: string;
    duration!: number;
    neededPosition!: {
        projectManager: number;
        projectMember: number;
    };
    deadline!: Date;
}