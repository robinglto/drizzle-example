import { db } from "@/db";
import { users } from "@/db/schema";
import Form from "./Form";

export default async function page() {
  // const dbUsers = await db.select().from(users);
  const dbUsers = await db.select().from(users);

  return (
    <>
      <p>my users:</p>
      {dbUsers.map((users) => (
        <div key={users.id}>
          {users.name} {users.email}
        </div>
      ))}

      <Form />
    </>
  );
}
