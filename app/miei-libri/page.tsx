"use client";

import { useEffect, useState } from "react";

export default function MieiLibri(){

  const [prenotati, setPrenotati] = useState<any[]>([]);

  useEffect(()=>{

    const data = localStorage.getItem("prenotati");

    if(data){
      setPrenotati(JSON.parse(data));
    }

  },[]);

  return(

    <div style={{padding:"40px"}}>

      <h1>I miei libri</h1>

      {prenotati.length === 0 && (
        <p>Nessun libro prenotato</p>
      )}

      {prenotati.map(libro => (

        <div key={libro.id}>

          <h3>{libro.titolo}</h3>

        </div>

      ))}

    </div>

  );

}