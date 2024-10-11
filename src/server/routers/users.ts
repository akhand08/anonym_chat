import { publicProcedure } from "../trpc";
import {z}  from 'zod'
import genUniqueId from "../../utils/helpers";
import db from  "../../utils/db"
import {users} from "../../utils/schema"


export const userRouter = publicProcedure
    .input(z.object({
        name: z.string().min(1)
    }))
    .mutation(async ({input}) => {
        const {name} = input;

        const randomStr = genUniqueId()
        const link = `http://localhost:3000/${name}/${randomStr}`
        
        
        const newUser = await db.insert(users)
    	    .values({ name: name, link: link })
            .returning({ name: users.name, link: users.link });
        
        
        return newUser[0];


    })


    