import { createRouter } from "../trpc";
import { userRouter } from "./users";
import { commentRouter} from "./comments"


export const appRouter = createRouter({
    users: userRouter,
    comments: commentRouter,
})

export type AppRouter = typeof appRouter