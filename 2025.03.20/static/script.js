
document.getElementById("romanButton").addEventListener("click", function () {
    const eingabe = document.getElementById("romanInput").value;
    const url = "/Roman?input=" + encodeURIComponent(eingabe);

    fetch(url)
        .then(function (antwort) {
            return antwort.json();
        })
        .then(function (daten) {
            const ergebnis = daten.result;
            const anzeige = ergebnis !== null ? ergebnis : "Ungültige Eingabe";
            document.getElementById("romanResult").textContent = anzeige;
        });
});

document.getElementById("numberButton").addEventListener("click", function () {
    const eingabe = document.getElementById("numberInput").value;
    const url = "/Numbers?input=" + encodeURIComponent(eingabe);

    fetch(url)
        .then(function (antwort) {
            return antwort.json();
        })
        .then(function (daten) {
            const ergebnis = daten.result;
            const anzeige = ergebnis !== null ? ergebnis : "Ungültige Eingabe";
            document.getElementById("numberResult").textContent = anzeige;
        });
});
