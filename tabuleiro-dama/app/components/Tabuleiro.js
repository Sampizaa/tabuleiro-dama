import Casa from "./Casa";

export default function Tabuleiro({ cor1, cor2 }) {
    const tamanho = 8;
    const tabuleiro = [];

    for (let linha = 0; linha < tamanho; linha++) {
        const linhaTabuleiro = [];
        for (let coluna = 0; coluna < tamanho; coluna++) {
            const cor = (linha + coluna) % 2 === 0 ? cor1 : cor2;

            let peca = null;
            if (cor === cor2) {
                if (linha < 3) {
                    peca = { cor: "red", dama: false };
                } else if (linha > 4) {
                    peca = { cor: "blue", dama: false };
                }
            }

            linhaTabuleiro.push(
                <Casa key={`${linha}-${coluna}`} cor={cor} peca={peca} />
            );
        }
        tabuleiro.push(
            <div key={linha} style={{ display: "flex" }}>{linhaTabuleiro}</div>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Dama</h1>
            <div
                className="grid gap-0"
                style={{
                    gridTemplateRows: "repeat(8, 1fr)",
                    width: "min(90vw, 400px)", // Responsivo
                    margin: "auto",
                    border: "5px solid gray",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                }}
            >
                {tabuleiro}
            </div>
        </div>
    );
}
