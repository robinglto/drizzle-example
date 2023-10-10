'use server'

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (name: string, email:string) => {
  await db.insert(users).values({ name, email });
};

export const deleteUser = async (id: number, name: string, email: string) => {
  await db.delete(users).where((eq(users.id, id) && eq(users.name, name)) && eq(users.email, email));
};

export const updateUser = async (name: string, email:string, id:number) => {
  await db.update(users)
  .set({ name: name, email: email })
  .where(eq(users.id, id));
}