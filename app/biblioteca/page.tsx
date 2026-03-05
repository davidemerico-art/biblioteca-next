"use client";

import { useState } from "react";
import { libri } from "../../data/libri";
import Book from "../components/Book";
import { useRouter } from "next/navigation";

export default function Biblioteca() {

  const [prenotati, setPrenotati] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  function prenota(libro:any){

    if(prenotati.find(l => l.id === libro.id)){
      alert("Hai già prenotato questo libro");
      return;
    }

    setPrenotati([...prenotati, libro]);

    alert("Libro prenotato");

  }

  const libriFiltrati = libri.filter(libro =>
    libro.titolo.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div style={{padding:"40px"}}>

      <h1>Biblioteca</h1>

      <button onClick={()=>router.push("/miei-libri")}>
        I miei libri
      </button>

      <br/>
      <br/>

      <input
        placeholder="Cerca libro..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        marginTop:"30px"
      }}
      >

        {libriFiltrati.map(libro => (

          <Book
            key={libro.id}
            {...libro}
            prenota={prenota}
          />

        ))}

      </div>

    </div>

  );
}