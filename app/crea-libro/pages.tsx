"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreaLibro() {
  const [titolo, setTitolo] = useState("");
  const [autore, setAutore] = useState("");
  const [iban, setIban] = useState("");
  const [fraseFamosa, setFraseFamosa] = useState("");
  const [img, setImg] = useState("");

  const router = useRouter();

  function salvaLibro(e: React.FormEvent) {
    e.preventDefault();

    const libri = JSON.parse(localStorage.getItem("libri") || "[]");

    const nuovoLibro = {
      id: Date.now(), 
      titolo,
      autore,
      iban,
      fraseFamosa,
      img
    };

    localStorage.setItem("libri", JSON.stringify([...libri, nuovoLibro]));
    alert("Libro creato!");
    router.push("/"); 
  }

  return (
    <div style={{padding:"40px"}}>
      <h1>Crea nuovo libro</h1>
      <form onSubmit={salvaLibro} style={{display:"flex", flexDirection:"column", gap:"10px", maxWidth:"400px"}}>
        <input 
          placeholder="Titolo" 
          value={titolo} 
          onChange={e => setTitolo(e.target.value)} 
          required 
        />
        <input 
          placeholder="Autore" 
          value={autore} 
          onChange={e => setAutore(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Iban" 
          value={iban} 
          onChange={e => setIban(e.target.value)} 
          required 
        />
        <input 
          placeholder="Frase famosa" 
          value={fraseFamosa} 
          onChange={e => setFraseFamosa(e.target.value)} 
          required 
        />
        <input 
          placeholder="URL immagine" 
          value={img} 
          onChange={e => setImg(e.target.value)} 
          required 
        />
        <button type="submit">Salva libro</button>
      </form>
    </div>
  );
}