import { userRouter } from "../routers/users";
import { createRouter } from "../app";

export const appRouter = createRouter({
    users: userRouter
})
