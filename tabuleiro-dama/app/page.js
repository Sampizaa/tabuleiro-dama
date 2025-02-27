import Tabuleiro from "./components/Tabuleiro";

export default function Home() {
  return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
      >
        <Tabuleiro cor1="white" cor2="black" />
      </div>
  );
}
