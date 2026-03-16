type BookProps = {
  id:number;
  titolo:string;
  autore:string;
  isbn:string;
  fraseFamosa:string;
  img:string;
  prenota: () => void;
  acquista: () => void;
};

export default function Book({
  titolo,
  autore,
  isbn,
  fraseFamosa,
  img,
  prenota,
  acquista
}:BookProps){

  return(

    <div className="card">

      <img src={img} alt={titolo}/>

      <h3>{titolo}</h3>

      <p>{autore}</p>

      <p>ISBN: {isbn}</p>

      <p style={{fontStyle:"italic"}}>
        "{fraseFamosa}"
      </p>

      <button onClick={prenota}>
        Prenota
      </button>

     <button onClick={acquista}>
  Acquista
</button>

    </div>

  )

}