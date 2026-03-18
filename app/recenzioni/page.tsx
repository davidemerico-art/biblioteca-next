"use client";

import { useState, useEffect } from "react";

export default function Recensioni() {

  const [recensioni, setRecensioni] = useState<any[]>([]);
  const [utente, setUtente] = useState("");
  const [titolo, setTitolo] = useState("");
  const [testo, setTesto] = useState("");
  const [stelle, setStelle] = useState(0);
  const [hoverStelle, setHoverStelle] = useState(0);


  useEffect(() => {
    const data = localStorage.getItem("recensioni");
    if (data) {
      setRecensioni(JSON.parse(data));
    }
  }, []);


  const salvaRecensioni = (nuoveRecensioni:any[]) => {
    setRecensioni(nuoveRecensioni);
    localStorage.setItem("recensioni", JSON.stringify(nuoveRecensioni));
  };

  const inviaRecensione = (e:any) => {
    e.preventDefault();

    if (!utente || !titolo || !testo || stelle === 0) {
      alert("Compila tutti i campi e assegna un voto");
      return;
    }

    const nuovaRecensione = {
      id: Date.now(),
      user: utente,
      titolo,
      testo,
      stelle
    };

    const nuoveRecensioni = [...recensioni, nuovaRecensione];

    salvaRecensioni(nuoveRecensioni);

    setTitolo("");
    setTesto("");
    setStelle(0);
  };

  const eliminaRecensione = (id:number) => {
    const filtrate = recensioni.filter(r => r.id !== id);
    salvaRecensioni(filtrate);
  };

  const modificaRecensione = (id:number) => {
    const nuovaLista = recensioni.map(r => {
      if (r.id === id) {
        const nuovoTitolo = prompt("Nuovo titolo", r.titolo);
        const nuovoTesto = prompt("Nuovo testo", r.testo);
        const nuoveStelle = prompt("Nuove stelle (1-5)", r.stelle);

        return {
          ...r,
          titolo: nuovoTitolo || r.titolo,
          testo: nuovoTesto || r.testo,
          stelle: parseInt(nuoveStelle || r.stelle)
        };
      }
      return r;
    });

    salvaRecensioni(nuovaLista);
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Recensioni</h2>

      {recensioni.length === 0 && <p>Nessuna recensione ancora.</p>}

      {recensioni.map(r => (
        <div
          key={r.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >

          <h4>{r.titolo}</h4>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
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

          <button onClick={() => eliminaRecensione(r.id)}>
            Elimina
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => modificaRecensione(r.id)}
          >
            Modifica
          </button>

        </div>
      ))}

      <hr style={{ margin: "30px 0" }} />

      <h3>Scrivi una recensione</h3>

      <form onSubmit={inviaRecensione}>

        <input
          type="text"
          placeholder="Il tuo nome"
          value={utente}
          onChange={(e) => setUtente(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Titolo recensione"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Scrivi la tua recensione"
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

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
