import { PrismaClient, Teacher } from "@prisma/client";

export class TeacherService {
    constructor(private prisma : PrismaClient) {}

    async create(teacher : Teacher) : Promise<void> {
        this.prisma.teacher.create({
            data: teacher
        })
    }
}