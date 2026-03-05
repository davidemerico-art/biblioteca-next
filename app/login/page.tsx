"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    const user = { nome, email };

    localStorage.setItem("user", JSON.stringify(user));

    router.push("/biblioteca");
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Entra</button>

    </form>
  );
}