import { publicProcedure } from "../app";
import {z}  from 'zod'
import genUniqueId from "../utils";
import db from '../db/index'
import {users} from "../db/schema"


export const userRouter = publicProcedure
    .input(z.object({
        name: z.string().min(1)
    }))
    .mutation(async ({input}) => {
        const {name} = input;

        const randomStr = genUniqueId()
        const link = `http://localhost:3000/${name}/${randomStr}`

        const newUser = await db.insert(users).values({"name": name, "link": link})

        return newUser;


    })