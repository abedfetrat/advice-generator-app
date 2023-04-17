async function generateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const responseJSON = await response.json();
    const slip = responseJSON.slip;
    document.getElementById("advice-number").innerText = slip.id;
    document.getElementById("advice").innerText = slip.advice;
    document.getElementById("dice").classList.add("animate");
    setTimeout(() => {
        document.getElementById("dice").classList.remove("animate");
    }, 800);
}

generateAdvice();

document.getElementById("dice").onclick = generateAdvice;