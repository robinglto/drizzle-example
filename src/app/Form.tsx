"use client";
import React, { useState } from "react";
import { createUser, deleteUser } from "./lolo";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createUser(username, email);
  };

  const handleDelete = (event: any) => {
    event.preventDefault();
    deleteUser(email);
  };

  return (
    <form className="flex space-x-11">
      <button onClick={handleDelete}>Delete User</button>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
        className="text-black"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
        className="text-black"
      />
      <button onClick={handleSubmit}>Create user</button>
    </form>
  );
}
