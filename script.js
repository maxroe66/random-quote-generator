const button = document.getElementById('generate-quote');
const quotes = [
    "inspiration: La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    "humour: Je suis en forme. Ronde est une forme, non ? - Anonyme",
    "vie: La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. - John Lennon",
    "sagesse: Le vrai signe de l'intelligence n'est pas la connaissance mais l'imagination. - Albert Einstein",
    "amour: L'amour ne consiste pas à se regarder l'un l'autre, mais à regarder ensemble dans la même direction. - Antoine de Saint-Exupéry",
    "amitie: Un ami est quelqu'un qui sait tout de toi et qui t'aime quand même. - Elbert Hubbard",
    "courage: Le courage n'est pas l'absence de peur, mais la capacité de la vaincre. - Nelson Mandela"
]

const usedIndexs = new Set();
const quoteElement = document.getElementById("quote");
button.addEventListener('click', async (e) => {
    e.preventDefault();
    function generateQuote() {
        if(usedIndexs.size >= quotes.length) {
            usedIndexs.clear();
        }
        while(true) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            if(usedIndexs.has(randomIndex)) continue;
            const quote = quotes[randomIndex];
            quoteElement.innerHTML = quote;
            usedIndexs.add(randomIndex);
            break;
        }
    }
    generateQuote();
});