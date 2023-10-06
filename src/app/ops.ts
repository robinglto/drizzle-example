'use server'

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (name: string, email:string) => {
    "use server"
  await db.insert(users).values({ name, email });
};

export const deleteUser = async (id:number) => {
  "use server"
  await db.delete(users).where(eq(users.id, id) );
};

export const updateUser = async (name: string, email:string, id:number) => {
  await db.update(users)
  .set({ name: name, email: email })
  .where(eq(users.id, id));
}