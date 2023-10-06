import { db } from "@/db";
import { users } from "@/db/schema";
import Form from "./Form";

export default async function page() {
  const dbUsers = await db.select().from(users);

  return (
    <>
      <div className="flex justify-between w-full font-mono">
        <div className="h-screnn text-center flex justify-center mx-auto items-center bg-cyan-100/60 dark:bg-black dark:text-white w-1/2">
          <div>
            <div className="w-2/3 mx-auto space-y-5 mb-6">
              <p className="text-5xl">Bienvenido</p>
              <p>
                Registra tus datos para que formes parte de la comunidad que
                estamos formando...
              </p>
            </div>
            {dbUsers.map((users) => (
              <div
                key={users.id}
                className=" w-5/12 mx-auto  border-b-2 my-2 p-2 rounded-sm border-solid border-black dark:border-white text-start"
              >
                <p>ID: {users.id}</p>
                <div>Name: {users.name}</div>
                <div>Email: {users.email}</div>
              </div>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}
