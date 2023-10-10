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

    deleteUser(parseInt(id), username, email);
  };

  const handleUpdate = (event: any) => {
    event.preventDefault();

    updateUser(username, email, parseInt(id));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-black  w-2/3">
      <div>
        <p className="mx-auto my-10 text-3xl text-center">Create a new user</p>
        <div className="mx-auto w-2/3 my-10 space-y-5">
          <p>
            <strong>Rules of use:</strong>
          </p>
          <p>
            1. To create a new user you must enter a name with more than 3
            characters and a valid email. The Id is not necessary because it is
            generated automatically
          </p>
          <p>
            2. To delete a user you must enter the ID, name and email of the
            user you want to delete
          </p>
          <p>
            3. To update a user you must specify the user using the id and then
            enter the name and email you want to enter.
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
                placeholder="Id"
                onChange={handleChangeId}
                className="text-black py-2 px-3 rounded-xl w-full "
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                value={username}
                placeholder="Name"
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
                placeholder="Email"
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
                Create
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
