let codes = [
    {
        sequence: ["r","o","b","o","t","e","v","e","n","t","s"],
        href: "https://robotevents.com/teams/V5RC/59200A",
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