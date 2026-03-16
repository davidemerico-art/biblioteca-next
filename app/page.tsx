"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Biblioteca from "./biblioteca/page";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Compila tutti i campi per accedere");
      return;
    }

    router.push("/biblioteca"); 
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Esplora la nostra vasta collezione di libri
          </h2>

          <p style={{ fontSize: "18px", color: "#555" }}>
            Accedi al tuo account per scoprire e leggere i tuoi libri preferiti
          </p>

          
          <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "8px", marginRight: "10px" }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "8px", marginRight: "10px" }}
            />

            <button type="submit">Accedi</button>
          </form>
        </div>

        <div
          style={{
            position: "absolute",
            right: "30px",
          }}
        >
          
        </div>
      </div>

      <div
        style={{
          height: "500px",
          backgroundImage:
            "url('https://media.cultura.gov.it/mibac/files/5108/Sala%20della%20Crociera%201.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
}