/**
 * @jest-environment jsdom
 */

import Game from '../src/js/game';

describe('Game', () => {
  let game;
  
  beforeEach(() => {
    document.body.innerHTML = '<div class="game-field" id="game-field"></div>';
    game = new Game();
  });

  afterEach(() => {
    if (game.interval) {
      clearInterval(game.interval);
    }
  });

  test('should create 16 cells', () => {
    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(16);
  });

  test('should place goblin in a cell', () => {
    const goblin = document.querySelector('.goblin');
    expect(goblin).toBeTruthy();
    expect(game.currentPosition).toBeGreaterThanOrEqual(0);
    expect(game.currentPosition).toBeLessThan(16);
  });

  test('should move goblin to different position', () => {
    const initialPosition = game.currentPosition;
    game.moveGoblin();
    expect(game.currentPosition).not.toBe(initialPosition);
  });

  test('should have only one goblin at a time', () => {
    game.moveGoblin();
    const goblins = document.querySelectorAll('.goblin');
    expect(goblins.length).toBe(1);
  });
});