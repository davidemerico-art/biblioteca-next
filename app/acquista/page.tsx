"use client";

import { useState } from "react";

export default function AcquistaPage() {

  const [metodo, setMetodo] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Pagamento inviato!");
  };

  return (
    <div style={{padding:"40px"}}>
      <h1>Acquista libro</h1>

      <h3>Seleziona metodo di pagamento</h3>

      <select
        value={metodo}
        onChange={(e)=>setMetodo(e.target.value)}
      >
        <option value="">-- Scegli --</option>
        <option value="carta">Carta</option>
        <option value="bonifico">Bonifico</option>
      </select>

      <br/><br/>

      <form onSubmit={handleSubmit}>

        {/* PAGAMENTO CARTA */}
        {metodo === "carta" && (
          <div>

            <h2>Pagamento con carta</h2>

            <div>
              <label>Numero della carta (PAN)</label><br/>
              <input
                type="text"
                placeholder="16 cifre"
                maxLength={16}
                required
              />
            </div>

            <br/>

            <div>
              <label>Data di scadenza</label><br/>
              <input
                type="text"
                placeholder="MM/AA"
                required
              />
            </div>

            <br/>

            <div>
              <label>Nome e Cognome del titolare</label><br/>
              <input
                type="text"
                placeholder="Nome Cognome"
                required
              />
            </div>

            <br/>

            <div>
              <label>Codice di sicurezza (CVV2/CVC2)</label><br/>
              <input
                type="password"
                maxLength={3}
                placeholder="3 cifre"
                required
              />
            </div>

          </div>
        )}

        {/* BONIFICO */}
        {metodo === "bonifico" && (
          <div>

            <h2>Bonifico bancario</h2>

            <div>
              <label>Beneficiario (Intestatario)</label><br/>
              <input
                type="text"
                required
              />
            </div>

            <br/>

            <div>
              <label>IBAN del beneficiario</label><br/>
              <input
                type="text"
                required
              />
            </div>

            <br/>

            <div>
              <label>Importo</label><br/>
              <input
                type="number"
                required
              />
            </div>

            <br/>

            <div>
              <label>Causale</label><br/>
              <input
                type="text"
                required
              />
            </div>

            <br/>

            <div>
              <label>Tipo di bonifico</label><br/>
              <select required>
                <option value="">-- scegli --</option>
                <option>Ordinario</option>
                <option>Istantaneo</option>
              </select>
            </div>

          </div>
        )}

        <br/>

        {metodo && (
          <button type="submit">
            Conferma pagamento
          </button>
        )}

      </form>

    </div>
  );
}