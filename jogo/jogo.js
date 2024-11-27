let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let mascotImage = "imagens/Mascote.png"; // Adicione o caminho da imagem do seu mascote
let mascotMoves = [0, 2, 4, 6, 8]; // As células onde o mascote pode jogar, escolha as que quiser

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        const cell = document.getElementsByClassName('cell')[index];
        cell.innerHTML = `<span class="${currentPlayer.toLowerCase()}">${currentPlayer}</span>`;
        checkWinner();

        if (gameActive && currentPlayer === 'X') {
            currentPlayer = 'O'; // Agora é a vez do mascote jogar
            showMascotMove(); // Exibe o mascote jogando em uma das células
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            document.getElementById('status').innerText = `${currentPlayer === 'X' ? 'Jogador' : 'Mascote'} venceu!`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        document.getElementById('status').innerText = 'Empate!';
    }
}

function showMascotMove() {
    // O mascote vai jogar em uma célula vazia das opções que ele pode
    let availableMoves = mascotMoves.filter(index => board[index] === '');
    if (availableMoves.length > 0) {
        let move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        let mascoteDiv = document.getElementsByClassName('cell')[move];

        // Exibe a imagem do mascote dentro da célula
        mascoteDiv.innerHTML = `<img src="${mascotImage}" alt="Mascote">`;

        // Após a imagem, o mascote faz a jogada
        setTimeout(function() {
            mascoteDiv.innerHTML = `<span class="o">O</span>`;
            board[move] = 'O'; // Mascote faz a jogada
            checkWinner();

            // Depois da jogada, o mascote desaparece e volta à vez do jogador
            setTimeout(function() {
                currentPlayer = 'X'; // Sua vez de jogar
            }, 500);
        }, 500); // O mascote vai jogar após um pequeno delay
    }
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerHTML = ''; // Limpa as células
    }
}
