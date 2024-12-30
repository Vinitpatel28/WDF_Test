// Game Variables
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const cardGrid = document.getElementById('cardGrid');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;

// Create the deck of cards (shuffle and duplicate values)
function createDeck() {
    let deck = [...cardValues, ...cardValues];
    deck = shuffle(deck);
    return deck;
}

// Shuffle function (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the cards on the grid
function createCards() {
    const deck = createDeck();
    cardGrid.innerHTML = '';
    deck.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        cardGrid.appendChild(card);
        cards.push(card);
    });
}

// Flip a card
function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped') || this.classList.contains('matched')) return;

    this.classList.add('flipped');
    this.textContent = this.dataset.value;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Check if two flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 10;
        matchedPairs++;
        scoreDisplay.textContent = score;
        flippedCards = [];
        if (matchedPairs === cardValues.length) {
            endGame();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

// End game when all pairs are matched
function endGame() {
    messageDisplay.textContent = 'You Win! All Pairs Matched!';
    restartBtn.classList.remove('hidden');
}

// Restart the game
restartBtn.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('flipped', 'matched'));
    flippedCards = [];
    matchedPairs = 0;
    score = 0;
    scoreDisplay.textContent = score;
    messageDisplay.textContent = '';
    restartBtn.classList.add('hidden');
    createCards();
});

// Initialize the game
createCards();
