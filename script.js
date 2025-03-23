const correctWord = "JONMARU";  // 정답 단어
let attempts = 0;
const maxAttempts = 6;

function checkWord() {
    const inputElement = document.getElementById("word-input");
    const messageElement = document.getElementById("message");
    const gameBoard = document.getElementById("game-board");

    let guess = inputElement.value.toUpperCase().trim();

    if (guess.length !== 5) {
        messageElement.textContent = "5글자 단어를 입력하세요!";
        return;
    }

    if (attempts >= maxAttempts) {
        messageElement.textContent = "게임 오버! 정답: " + correctWord;
        return;
    }

    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < 5; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = guess[i];

        if (guess[i] === correctWord[i]) {
            tile.classList.add("correct");
        } else if (correctWord.includes(guess[i])) {
            tile.classList.add("present");
        } else {
            tile.classList.add("absent");
        }

        row.appendChild(tile);
    }

    gameBoard.appendChild(row);
    attempts++;

    if (guess === correctWord) {
        messageElement.textContent = "축하합니다! 정답을 맞췄어요!";
        inputElement.disabled = true;
    } else if (attempts === maxAttempts) {
        messageElement.textContent = "실패! 정답은 " + correctWord;
    }

    inputElement.value = "";
}
