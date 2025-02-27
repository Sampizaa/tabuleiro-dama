"use client"; // 🔥 Para permitir eventos no Next.js

export default function Casa({ cor, peca }) {
    return (
        <div
            style={{
                width: "12.5%",
                aspectRatio: "1/1",
                backgroundColor: cor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
                cursor: peca ? "pointer" : "default",
            }}
            onMouseEnter={(e) => (e.target.style.filter = "brightness(85%)")}
            onMouseLeave={(e) => (e.target.style.filter = "brightness(100%)")}
        >
            {peca && (
                <div
                    style={{
                        width: "75%",
                        height: "75%",
                        background: `radial-gradient(circle, ${peca.cor} 20%, ${
                            peca.cor === "red" ? "#990000" : "#000099"
                        } 80%)`,
                        borderRadius: "50%",
                        border: "3px solid black", // Borda padrão para todas as peças
                        boxShadow: "inset 0px 0px 8px rgba(255,255,255,0.5), 0px 0px 8px rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                        e.target.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.7)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "inset 0px 0px 8px rgba(255,255,255,0.5), 0px 0px 8px rgba(0,0,0,0.5)";
                    }}
                />
            )}
        </div>
    );
}