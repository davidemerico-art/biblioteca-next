"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MieiLibri(){

  const [libri,setLibri] = useState<any[]>([]);
  const router = useRouter();

  useEffect(()=>{

    const data = localStorage.getItem("prenotati");

    if(data){
      const parsed = JSON.parse(data);

      const puliti = parsed.filter((l:any) => l !== null);

      setLibri(puliti);
    }

  },[]);

  const restituisci = (id:number) => {

    const nuovi = libri.filter(libro => libro.id !== id);

    setLibri(nuovi);

    localStorage.setItem("prenotati", JSON.stringify(nuovi));

  };
  const acquista = (libro:any) => {
  router.push("/acquista");
};

  return(

    <div style={{padding:"40px"}}>

      <h1>I miei libri</h1>

      <button
        onClick={()=>router.push("/biblioteca")}
        style={{marginBottom:"30px"}}
      >
        Torna alla biblioteca
      </button>

      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"20px"
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
              alt={libro.titolo}
              style={{width:"100%"}}
            />

            <h3>{libro.titolo}</h3>
  <button onClick={()=>restituisci(libro.id)}>
  Restituisci
</button>

<button 
  onClick={()=>acquista(libro)}
  style={{ marginLeft: "10px" }}
>
  Acquista
</button>
            

          </div>

        ))}

      </div>

    </div>

  )

}