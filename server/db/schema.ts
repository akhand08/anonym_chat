
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const users = pgTable("users", {

    id: serial('id').primaryKey(),
    name: varchar('name', {length: 256}).notNull(),
    link: varchar('link', {length: 100}).unique(),
    

})

export const userRalation = relations( users, ({ many }) => ({
    comments: many(comments)
}))

export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    content: varchar('content', {length: 250}).notNull(),
    userId: integer('user_id').notNull().references(() => users.id, {onDelete: "cascade"})
})

export const commentRelation = relations(comments, ({ one }) => ({
    users: one(users)
}))
