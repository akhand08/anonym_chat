import {initTRPC} from '@trpc/server'
import {config} from 'dotenv'
import db from './db/index'

db.execute('select 1')
config()

const t = initTRPC.create()

export const createRouter = t.router;
export const publicProcedure = t.procedure
