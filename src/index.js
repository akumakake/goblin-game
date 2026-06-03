import './css/style.css';
import goblinImg from './img/goblin.png';

class Game {
  constructor() {
    this.boardSize = 4;
    this.cells = [];
    this.currentPosition = -1;
    this.interval = null;
    this.gameField = document.getElementById('game-field');
    
    this.init();
  }

  init() {
    this.createBoard();
    this.startGame();
  }

  createBoard() {
    this.gameField.innerHTML = '';
    this.cells = [];
    
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      this.gameField.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.cells.length);
    } while (newPosition === this.currentPosition);
    
    return newPosition;
  }

  placeGoblin(position) {
    // Удаляем гоблина со старой позиции
    const oldGoblin = this.gameField.querySelector('.goblin');
    if (oldGoblin) {
      oldGoblin.remove();
    }

    // Размещаем гоблина на новой позиции
    const img = document.createElement('img');
    img.src = goblinImg;
    img.classList.add('goblin');
    img.alt = 'Goblin';
    
    this.cells[position].appendChild(img);
    this.currentPosition = position;
  }

  moveGoblin() {
    const newPosition = this.getRandomPosition();
    this.placeGoblin(newPosition);
  }

  startGame() {
    this.moveGoblin();
    this.interval = setInterval(() => {
      this.moveGoblin();
    }, 1000);
  }
}

// Запускаем игру при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});