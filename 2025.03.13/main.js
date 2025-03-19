import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

const rustGame = {
    title: "Rust",
    developer: "Facepunch Studios",
    release_year: 2013,
    genres: ["Survival", "Multiplayer", "Open World"],
    platforms: ["PC", "Mac", "Xbox", "PlayStation"]
};

// Serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));

// API-Endpunkt für Rust-Spiel
app.get("/game", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulierte Verzögerung
    return c.json(rustGame);
});

// Statische Dateien ausliefern
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
