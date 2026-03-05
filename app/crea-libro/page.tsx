"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreaLibri(){

  const [titolo,setTitolo] = useState("");
  const [autore,setAutore] = useState("");
  const [iban,setIban] = useState("");
  const [frase,setFrase] = useState("");
  const [img,setImg] = useState("");

  const router = useRouter();

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

      {/* Bottone per tornare alla biblioteca */}
      <button 
        onClick={() => router.push("/biblioteca")} 
        style={{marginBottom:"20px"}}
      >
        Torna alla biblioteca
      </button>
<br/><br/>
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
<br/><br/>
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
<br/><br/>
      <input
        placeholder="Link immagine"
        value={img}
        onChange={(e)=>setImg(e.target.value)}
      />
<br/><br/>
      <button onClick={crea} style={{marginTop:"10px"}}>
        Crea libro
      </button>

    </div>

  )

}