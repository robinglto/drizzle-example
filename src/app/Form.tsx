"use client";

import React, { useState } from "react";
import { createUser, deleteUser, updateUser } from "./ops";
import { useForm } from "react-hook-form";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangeId = (event: any) => {
    setId(event.target.value);
  };

  const crearUsuario = () => {
    createUser(username, email);
  };

  const handleDelete = (event: any) => {
    event.preventDefault();

    deleteUser(parseInt(id));
  };

  const handleUpdate = (event: any) => {
    event.preventDefault();

    updateUser(username, email, parseInt(id));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-black  w-2/3">
      <div>
        <p className="mx-auto my-10 text-3xl text-center">
          Crear un nuevo usuario
        </p>
        <div className="mx-auto w-2/3 my-10 space-y-5">
          <p>
            <strong>Reglas de uso:</strong>
          </p>
          <p>
            1. Para crear un nuevo usaurio debes de colocar un nombre con mas de
            3 caracteres y un email valido. El Id no es necesario debido a que
            genera de manera automatica
          </p>
          <p>
            2. Para eliminar un usuario solo debes de colocar el Id del usuario
            que quieres eliminar
          </p>
          <p>
            3. Para actualizar un usuario debes especificar el usuario mediante
            el id y luego colocar el nombre y correo que quieres colocarle Id.
          </p>
        </div>
        <div className="  mx-auto  ">
          <form
            className="space-y-4 w-2/3 mx-auto"
            onSubmit={handleSubmit(crearUsuario)}
          >
            <div>
              <input
                id="id"
                type="number"
                value={id}
                placeholder="Id del usuario a eliminar"
                onChange={handleChangeId}
                className="text-black py-2 px-3 rounded-xl w-full "
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                value={username}
                placeholder="Nombre Completo"
                {...register("username", { required: true, minLength: 3 })}
                onChange={handleChangeUsername}
                className="text-black py-2 px-3 rounded-xl w-full "
              />
              {errors.username?.type === "required" && (
                <p>Ingrese un valor valido</p>
              )}
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Correo Electronico"
                value={email}
                required={true}
                onChange={handleChangeEmail}
                className="text-black py-2 px-3 rounded-xl w-full "
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full border text-black border-black  rounded-md  py-1 px-2.5"
              >
                Registrar
              </button>
            </div>
          </form>
          <div className="space-y-3 my-3">
            <div className="flex justify-center">
              <button
                onClick={handleDelete}
                className="w-2/3 border text-black border-black  rounded-md  py-1 px-2.5"
              >
                Delete
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleUpdate}
                className="w-2/3 border text-black border-black  rounded-md py-1 px-2.5"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
