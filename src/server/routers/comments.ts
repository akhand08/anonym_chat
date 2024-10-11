import { publicProcedure } from "../trpc";
import {z}  from 'zod'
import {eq} from 'drizzle-orm'
import db from  "../../utils/db"
import {users, comments} from "../../utils/schema"

export const commentRouter = publicProcedure
    .input(z.object({
        comment: z.string().min(10),
        link: z.string()
    }))
    .mutation(async ({input}) => {
        const {comment, link} = input;

        const userId = await db.select({id: users.id}).from(users).where(eq(users.link, link)).then(result => result[0]?.id)

        const newComment = await db.insert(comments)
            .values({content: comment, userId: userId})

        console.log("successful")


    })