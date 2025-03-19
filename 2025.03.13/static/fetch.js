const game_url = "game";

let game1 = "Ich bin noch nicht abgeholt game1";
let game2 = "Ich bin noch nicht abgeholt game2";

function fetchGame1() {
    fetch(game_url).then((response) => {
        if (response.ok) {
            response.json().then((game) => {
                game1 = game;
            });
        }
    });
}

async function fetchGame2() {
    console.log("fetchGame2 gestartet");
    const resp = await fetch(game_url);
    console.log("fetchGame2 response ist da");
    return await resp.json();
}

game2 = await fetchGame2();
console.log("game2: ", game2);
