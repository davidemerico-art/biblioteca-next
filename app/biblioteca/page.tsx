"use client";

import { useState } from "react";
import { libri } from "../../data/libri";
import Book from "../components/Book";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Biblioteca() {

  const [prenotati, setPrenotati] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [libriTotali, setLibriTotali] = useState<any[]>([]);

  const router = useRouter();

  function prenota(libro:any){
    const salvati = JSON.parse(localStorage.getItem("prenotati") || "[]");

    if(salvati.find((l:any) => l && l.id === libro.id)){
      alert("Hai già prenotato questo libro");
      return;
    }

    const nuovi = [...salvati, libro];
    localStorage.setItem("prenotati", JSON.stringify(nuovi));
    alert("Libro prenotato");
    return;
  }

  const libriFiltrati = libriTotali.filter(libro =>
  libro.titolo.toLowerCase().includes(search.toLowerCase())
);

  useEffect(() => {
  const creati = JSON.parse(localStorage.getItem("libriCreati") || "[]");
  setLibriTotali([...libri, ...creati]);
}, []);
  return (
    <div style={{padding:"40px"}}>
      <h1>Biblioteca</h1>

      <button onClick={()=>router.push("/miei-libri")}>
        I miei libri
      </button>

    
      <button onClick={() => router.push("/crea-libro")} style={{marginLeft: "20px"}}>
        Crea libro
      </button>

      <br/><br/>

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
    prenota={() => prenota(libro)} 
    key={libro.id}
    {...libro}
    acquista={() => acquista(libro)}
  />
  
))}

      
      </div>
    </div>
  );
}