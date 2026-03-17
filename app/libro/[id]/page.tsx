"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { libri } from "../../../data/libri";

export default function BookDetail() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const [libro, setLibro] = useState<any>(null);
  const [recensioni, setRecensioni] = useState<any[]>([]);
  const [nome, setNome] = useState("");
  const [testo, setTesto] = useState("");
  const [stelle, setStelle] = useState(0);
  const [hoverStelle, setHoverStelle] = useState(0);

  useEffect(() => {
    const creati = JSON.parse(localStorage.getItem("libriCreati") || "[]");
    const tutti = [...libri, ...creati];
    const trovato = tutti.find((l) => l.id === id);
    setLibro(trovato || null);

    const data = localStorage.getItem(`recensioni_${id}`);
    if (data) {
      setRecensioni(JSON.parse(data));
    }
  }, [id]);

  
  const salvaRecensione = (e: any) => {
    e.preventDefault();

    if (!nome || !testo || stelle === 0) {
      alert("Compila tutti i campi e assegna un voto");
      return;
    }

    const nuova = {
      id: Date.now(),
      user: nome,
      testo,
      stelle
    };

    const nuove = [...recensioni, nuova];
    setRecensioni(nuove);
    localStorage.setItem(`recensioni_${id}`, JSON.stringify(nuove));

    setNome("");
    setTesto("");
    setStelle(0);
  };

  if (!libro) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Libro non trovato</h2>
        <button onClick={() => router.push("/biblioteca")}>
          Torna alla biblioteca
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>

      <button onClick={() => router.push("/biblioteca")}>
        ← Torna indietro
      </button>

      
      {libro.img && (
        <div style={{ height: "500px", display: "flex", justifyContent: "center" }}>
          <img
            src={libro.img}
            alt={libro.titolo}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      )}

      <h1>{libro.titolo}</h1>
      <h3>{libro.autore}</h3>
      <p style={{ marginBottom: libro.descrizione ? "20px" : "0" }}>ISBN: {libro.isbn}</p>
      
      {libro.descrizione && (
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
          {libro.descrizione}
        </p>
      )}

      <hr style={{ margin: "40px 0" }} />

      <h2>Recensioni</h2>

      {recensioni.length === 0 && <p>Nessuna recensione ancora.</p>}

      {recensioni.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
            <strong>{r.user}</strong>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={r.stelle >= star ? "gold" : "transparent"}
                  stroke="gold"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "20px", height: "20px" }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
          <p>{r.testo}</p>
        </div>
      ))}

      <hr style={{ margin: "30px 0" }} />

      <h3>Scrivi una recensione</h3>

      <form onSubmit={salvaRecensione}>

        <input
          type="text"
          placeholder="Il tuo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Scrivi la recensione"
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          required
          style={{ width: "100%" }}
        />

        <br /><br />

        <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }} onMouseLeave={() => setHoverStelle(0)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={(hoverStelle || stelle) >= star ? "gold" : "transparent"}
              stroke="gold"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ cursor: "pointer", width: "40px", height: "40px", transition: "fill 0.2s" }}
              onMouseEnter={() => setHoverStelle(star)}
              onClick={() => setStelle(star)}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        <br /><br />

        <button type="submit">
          Invia recensione
        </button>

      </form>
    </div>
  );
}
