function randomParty() {
    let facts = Math.floor(Math.random() * (sentences.length));
    return sentences[facts];
}

let sentences = [
    'I started coding in 2008',
    'I have been graphic designing for 11 years.',
    'My mother inspired me to get into fashion.',
]

function getKnow() {
    let canvas = document.getElementById("funFact");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(randomParty(), 250, canvas.height / 2 + 10);
}