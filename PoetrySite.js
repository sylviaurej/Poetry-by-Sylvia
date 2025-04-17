const poems = [
    { title: "The Moon", content: "The moonlight shines so soft and bright..." },
    { title: "The River", content: "The river flows through stone and sky..." },
    { title: "Solitude", content: "In quiet rooms, the soul can breathe..." }
];

const container = document.getElementById('poems');
poems.forEach(poem => {
    const div = document.createElement('div');
    div.className = 'poem';
    div.innerHTML = `<h2>${poem.title}</h2><p>${poem.content}</p>`;
    container.appendChild(div);
});
