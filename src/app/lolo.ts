'use server'

import { db } from "@/db";
import { users } from "@/db/schema";



export const createUser = async (name: string, email:string) => {
    "use server"
  await db.insert(users).values({ name, email });
};

  