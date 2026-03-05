"use client";

import { useEffect, useState } from "react";

export default function MieiLibri(){

  const [libri, setLibri] = useState<any[]>([]);

  useEffect(()=>{

    const data = localStorage.getItem("prenotati");

    if(data){
      setLibri(JSON.parse(data));
    }

  },[]);

  function restituisci(id:number){

    const nuovi = libri.filter(libro => libro.id !== id);

    setLibri(nuovi);

    localStorage.setItem("prenotati", JSON.stringify(nuovi));

  }

  return(

    <div style={{padding:"40px"}}>

      <h1>I miei libri</h1>

      <div
      style={{
        display:"flex",
        gap:"20px",
        flexWrap:"wrap",
        marginTop:"30px"
      }}
      >

      {libri.map(libro => (

        <div
        key={libro.id}
        style={{
          width:"200px",
          border:"1px solid #ccc",
          padding:"10px",
          textAlign:"center"
        }}
        >

          <img
            src={libro.img}
            style={{width:"100%"}}
          />

          <h3>{libro.titolo}</h3>

          <button
          onClick={()=>restituisci(libro.id)}
          >
            Restituisci
          </button>

        </div>

      ))}

      </div>

    </div>

  );

}