"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Compila tutti i campi per accedere");
      return;
    }

    // mock del login per sbloccare la navbar
    const mockUser = { nome: email.split('@')[0], email };
    localStorage.setItem("user", JSON.stringify(mockUser));

    router.push("/biblioteca"); 
  };

  return (
    <div className="relative min-h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden">
      
      {/* immagine di copertina hero */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center -z-10 brightness-30 contrast-110"></div>

      <div className="page-wrapper animate-fade-in flex flex-col items-center text-center z-10 w-full">
        
        <div className="max-w-3xl mb-10">
          <h1 className="mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-white">
            L'intero sapere umano, <br/>
            <span className="text-[var(--color-accent-base)] italic">a portata di mano.</span>
          </h1>
          <p className="text-xl text-white opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Esplora la nostra vasta collezione di testi rari, classici intramontabili e novità editoriali. Accedi per iniziare.
          </p>
        </div>

        <div className="form-card glass animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-center mb-2 text-[#f0ead6]">Bentornato</h2>
          <p className="text-center mb-8 text-[0.95rem] text-[#9e9080]">
            Inserisci le tue credenziali per accedere
          </p>
          
          <form onSubmit={handleLogin} className="text-left w-full">
            <div className="mb-5">
              <label className="text-[#9e9080]">Indirizzo Email</label>
              <input
                type="email"
                placeholder="nome@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: '#222019', color: '#f0ead6', border: '1px solid #2e2b22' }}
              />
            </div>

            <div className="mb-8">
              <label className="text-[#9e9080]">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#222019', color: '#f0ead6', border: '1px solid #2e2b22' }}
              />
            </div>

            <button type="submit" className="w-full py-3.5 text-base" style={{ backgroundColor: '#c9a84c', color: '#0f0e0d' }}>
              Accedi al tuo account
            </button>
          </form>
          
          <div className="mt-6 text-center text-[0.85rem] text-[#9e9080]">
            Non hai un account? <span className="text-[#c9a84c] font-medium">Contatta l'amministratore</span>
          </div>
        </div>

      </div>
    </div>
  );
}