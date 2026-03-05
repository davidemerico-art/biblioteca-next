import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Esplora la nostra vasta collezione di libri
          </h2>

          <p style={{ fontSize: "18px", color: "#555" }}>
            Accedi al tuo account per scoprire e leggere i tuoi libri preferiti
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            right: "30px",
          }}
        >
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>

      <div
        style={{
          height: "500px",
          backgroundImage:
            "url('https://media.cultura.gov.it/mibac/files/5108/Sala%20della%20Crociera%201.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
}