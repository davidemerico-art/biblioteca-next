type BookProps = {
  id:number;
  titolo:string;
  autore:string;
  iban:string;
  fraseFamosa:string;
  img:string;
  prenota: () => void;
};

export default function Book({
  titolo,
  autore,
  iban,
  fraseFamosa,
  img,
  prenota
}:BookProps){

  return(

    <div className="card">

      <img src={img} alt={titolo}/>

      <h3>{titolo}</h3>

      <p>{autore}</p>

      <p>IBAN: {iban}</p>

      <p style={{fontStyle:"italic"}}>
        "{fraseFamosa}"
      </p>

      <button onClick={prenota}>
        Prenota
      </button>

    </div>

  )

}