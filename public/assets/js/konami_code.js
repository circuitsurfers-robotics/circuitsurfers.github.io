let codes = [
    {
        sequence: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
        href: "https://www.youtube.com/watch?v=U1dirHGODpM",
        index: 0,
    },
    {
        sequence: ["p", "p", "a", "p"],
        href: "https://www.youtube.com/watch?v=Ct6BUPvE2sM",
        index: 0,
    }
]

let sequenceIndex = 0;

document.addEventListener("keydown", (e) => {
    
    const ignoredChars = [" "];
    if (ignoredChars.includes(e.key)) return;

    codes.forEach((code) => {
        if (code.sequence[code.index] === e.key) {
            code.index += 1;
            if (code.index === code.sequence.length) {
                window.open(code.href, "_blank");
            }
        } else {
            code.index = 0;
        }
    })
});