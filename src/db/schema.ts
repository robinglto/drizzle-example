import { relations } from "drizzle-orm"
import { int, mysqlTable, serial, text } from "drizzle-orm/mysql-core"

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
})