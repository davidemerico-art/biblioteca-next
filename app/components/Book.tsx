type BookProps = {
  id: number;
  titolo: string;
  autore: string;
  iban: string;
  fraseFamosa: string;
  img: string;
  prenota: (id: number) => void;
};

export default function Book({
  id,
  titolo,
  autore,
  iban,
  fraseFamosa,
  img,
  prenota,
}: BookProps) {
  return (
    <div className="card">
      <img src={img} alt={titolo} />

      <h3>{titolo}</h3>

      <p className="autore">{autore}</p>

      <p>IBAN: {iban}</p>

      <p style={{ fontStyle: "italic" }}>
        "{fraseFamosa}"
      </p>

      <button onClick={() => prenota(id)}>
        Prenota libro
      </button>
    </div>
  );
}