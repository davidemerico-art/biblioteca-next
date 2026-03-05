"use client";

import { useState } from "react";

export default function CreaLibri(){

  const [titolo,setTitolo] = useState("");
  const [autore,setAutore] = useState("");
  const [iban,setIban] = useState("");
  const [frase,setFrase] = useState("");
  const [img,setImg] = useState("");

  const crea = () => {

    const nuovoLibro = {
      titolo,
      autore,
      iban,
      frase,
      img
    };

    console.log(nuovoLibro);

    alert("Libro creato!");

    setTitolo("");
    setAutore("");
    setIban("");
    setFrase("");
    setImg("");

  };

  return(

    <div className="container">

      <h1>Crea libro</h1>

      <input
        placeholder="Titolo"
        value={titolo}
        onChange={(e)=>setTitolo(e.target.value)}
      />

      <input
        placeholder="Autore"
        value={autore}
        onChange={(e)=>setAutore(e.target.value)}
      />

      <input
        placeholder="IBAN"
        value={iban}
        onChange={(e)=>setIban(e.target.value)}
      />

      <input
        placeholder="Frase famosa"
        value={frase}
        onChange={(e)=>setFrase(e.target.value)}
      />

      <input
        placeholder="Link immagine"
        value={img}
        onChange={(e)=>setImg(e.target.value)}
      />

      <button onClick={crea}>
        Crea libro
      </button>

    </div>

  )

}