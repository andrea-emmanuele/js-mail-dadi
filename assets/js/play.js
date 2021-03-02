let pc = document.getElementById("pc");
let you = document.getElementById("you");
let winnerIs = document.getElementById("winner");

function play() {
    let pcScore = Math.floor(Math.random() * 6 + 1);
    let yourScore = Math.floor(Math.random() * 6 + 1);

    pc.innerHTML = "PC: " + pcScore;
    you.innerHTML = "You: " + yourScore;

    if (pcScore > yourScore) {
        pc.style.color = "#228B22";
        you.style.color = "#FF0002";
        winnerIs.innerHTML = "You Loose!";
    }
    else if (pcScore < yourScore) {
        pc.style.color = "#FF0002";
        you.style.color = "#228B22";
        winnerIs.innerHTML = "You Win!";
    }
    else {
        pc.style.color = "#228B22";
        you.style.color = "#228B22";
        winnerIs.innerHTML = "Draw";
    }
}
