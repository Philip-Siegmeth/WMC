import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// Römisch zu Zahl
function romanToNumber(text) {
    const römisch = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };

    let zahl = 0;
    let i = 0;
    text = text.toUpperCase();

    while (i < text.length) {
        let zwei = text[i] + text[i + 1];
        if (römisch[zwei]) {
            zahl += römisch[zwei];
            i += 2;
        } else {
            zahl += römisch[text[i]];
            i++;
        }
    }

    return (zahl >= 1 && zahl <= 3999) ? zahl : null;
}

// Zahl zu Römisch
function numberToRoman(zahl) {
    if (zahl < 1 || zahl > 3999) return null;

    const paare = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    let text = "";
    for (const [wert, buchstabe] of paare) {
        while (zahl >= wert) {
            text += buchstabe;
            zahl -= wert;
        }
    }

    return text;
}

app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("*", serveStatic({ root: "./static" }));

app.get("/Roman", (c) => {
    const eingabe = c.req.query("input");
    const ergebnis = romanToNumber(eingabe);
    return c.json({ result: ergebnis });
});

app.get("/Numbers", (c) => {
    const eingabe = parseInt(c.req.query("input"));
    const ergebnis = numberToRoman(eingabe);
    return c.json({ result: ergebnis });
});

Deno.serve(app.fetch);
