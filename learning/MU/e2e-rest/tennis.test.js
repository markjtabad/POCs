const assert = require('assert');
const TennisGame = require('./tennis')

// Player 1: 0, Player 2: 0: Love-All
describe('Tennis', function() {
    it('Player 1: 0, Player 2: 0: Love-All', async function() {
    	let actual = generateOutput(0, 0);
    	assert.equal(actual, 'Love-All');
    });

// Player 1: 1, Player 2: 1: Fifteen-All
  it('Player 1: 1, Player 2: 1: Fifteen-All', async function() {
    let actual = generateOutput(1, 1);
    assert.equal(actual, 'Fifteen-All');
  });

// Player 1: 2, Player 2: 2: Thirty-All
  it('Player 1: 2, Player 2: 2: Thirty-All', async function() {
    let actual = generateOutput(2, 2);
    assert.equal(actual, 'Thirty-All');
  });

// Player 1: 3, Player 2: 3: Deuce
  it('Player 1: 3, Player 2: 3: Deuce', async function() {
    let actual = generateOutput(3, 3);
    assert.equal(actual, 'Deuce');
  });

// Player 1: 4, Player 2: 4: Deuce
  it('Player 1: 4, Player 2: 4: Deuce', async function() {
    let actual = generateOutput(4, 4);
    assert.equal(actual, 'Deuce');
  });

// Player 1: 1, Player 2: 0: Fifteen-Love
  it('Player 1: 1, Player 2: 0: Fifteen-Love', async function() {
    let actual = generateOutput(1, 0);
    assert.equal(actual, 'Fifteen-Love');
  });

// Player 1: 0, Player 2: 1: Love-Fifteen
  it('Player 1: 0, Player 2: 0: Love-Fifteen', async function() {
    let actual = generateOutput(0, 1);
    assert.equal(actual, 'Love-Fifteen');
  });

// Player 1: 2, Player 2: 0: Thirty-Love
  it('Player 1: 2, Player 2: 0: Thirty-Love', async function() {
    let actual = generateOutput(2, 0);
    assert.equal(actual, 'Thirty-Love');
  });

// Player 1: 0, Player 2: 2: Love-Thirty
  it('Player 1: 0, Player 2: 2: Love-Thirty', async function() {
    let actual = generateOutput(0, 2);
    assert.equal(actual, 'Love-Thirty');
  });

// Player 1: 3, Player 2: 0: Forty-Love
  it('Player 1: 3, Player 2: 0: Forty-Love', async function() {
    let actual = generateOutput(3, 0);
    assert.equal(actual, 'Forty-Love');
  });

// Player 1: 0, Player 2: 3: Love-Forty
  it('Player 1: 0, Player 2: 0: Love-All', async function() {
    let actual = generateOutput(0, 0);
    assert.equal(actual, 'Love-All');
  });

// Player 1: 4, Player 2: 0: Win for player1
  it('Player 1: 4, Player 2: 0: Win for player1', async function() {
    let actual = generateOutput(4, 0);
    assert.equal(actual, 'Win for player1');
  });

// Player 1: 0, Player 2: 4: Win for player2
  it('Player 1: 0, Player 2: 4: Win for player2', async function() {
    let actual = generateOutput(0, 4);
    assert.equal(actual, 'Win for player2');
  });

// Player 1: 2, Player 2: 1: Thirty-Fifteen
  it('Player 1: 0, Player 2: 0: Thirty-Fifteen', async function() {
    let actual = generateOutput(2, 1);
    assert.equal(actual, 'Thirty-Fifteen');
  });

// Player 1: 1, Player 2: 2: Fifteen-Thirty
  it('Player 1: 0, Player 2: 0: Fifteen-Thirty', async function() {
    let actual = generateOutput(1, 2);
    assert.equal(actual, 'Fifteen-Thirty');
  });

// Player 1: 3, Player 2: 1: Forty-Fifteen
  it('Player 1: 3, Player 2: 1: Forty-Fifteen', async function() {
    let actual = generateOutput(3, 1);
    assert.equal(actual, 'Forty-Fifteen');
  });

// Player 1: 1, Player 2: 3: Fifteen-Forty
  it('Player 1: 1, Player 2: 3: Fifteen-Forty', async function() {
    let actual = generateOutput(1, 3);
    assert.equal(actual, 'Fifteen-Forty');
  });

// Player 1: 4, Player 2: 1: Win for player1
  it('Player 1: 4, Player 2: 1: Win for player1', async function() {
    let actual = generateOutput(4, 1);
    assert.equal(actual, 'Win for player1');
  });

// Player 1: 1, Player 2: 4: Win for player2
  it('Player 1: 1, Player 2: 4: Win for player2', async function() {
    let actual = generateOutput(1, 4);
    assert.equal(actual, 'Win for player2');
  });

// Player 1: 3, Player 2: 2: Forty-Thirty
  it('Player 1: 3, Player 2: 2: Forty-Thirty', async function() {
    let actual = generateOutput(3, 2);
    assert.equal(actual, 'Forty-Thirty');
  });

// Player 1: 2, Player 2: 3: Thirty-Forty
  it('Player 1: 2, Player 2: 3: Thirty-Forty', async function() {
    let actual = generateOutput(2, 3);
    assert.equal(actual, 'Thirty-Forty');
  });

// Player 1: 4, Player 2: 2: Win for player1
  it('Player 1: 4, Player 2: 2: Win for player1', async function() {
    let actual = generateOutput(4, 2);
    assert.equal(actual, 'Win for player1');
  });

// Player 1: 2, Player 2: 4: Win for player2
  it('Player 1: 2, Player 2: 4: Win for player2', async function() {
    let actual = generateOutput(2, 4);
    assert.equal(actual, 'Win for player2');
  });

// Player 1: 4, Player 2: 3: Advantage player1
  it('Player 1: 4, Player 2: 3: Advantage player1', async function() {
    let actual = generateOutput(4, 3);
    assert.equal(actual, 'Advantage player1');
  });

// Player 1: 3, Player 2: 4: Advantage player2
  it('Player 1: 3, Player 2: 4: Advantage player2', async function() {
    let actual = generateOutput(3, 4);
    assert.equal(actual, 'Advantage player2');
  });

// Player 1: 5, Player 2: 4: Advantage player1
  it('Player 1: 5, Player 2: 4: Advantage player1', async function() {
    let actual = generateOutput(5, 4);
    assert.equal(actual, 'Advantage player1');
  });

// Player 1: 4, Player 2: 5: Advantage player2
  it('Player 1: 4, Player 2: 5: Advantage player2', async function() {
    let actual = generateOutput(4, 5);
    assert.equal(actual, 'Advantage player2');
  });

// Player 1: 15, Player 2: 14: Advantage player1
  it('Player 1: 15, Player 2: 14: Advantage player1', async function() {
    let actual = generateOutput(15, 14);
    assert.equal(actual, 'Advantage player1');
  });

// Player 1: 14, Player 2: 15: Advantage player2
  it('Player 1: 14, Player 2: 15: Advantage player2', async function() {
    let actual = generateOutput(14, 15);
    assert.equal(actual, 'Advantage player2');
  });

// Player 1: 6, Player 2: 4: Win for player1
  it('Player 1: 6, Player 2: 4: Win for player1', async function() {
    let actual = generateOutput(6, 4);
    assert.equal(actual, 'Win for player1');
  });

// Player 1: 4, Player 2: 6: Win for player2
  it('Player 1: 4, Player 2: 6: Win for player2', async function() {
    let actual = generateOutput(4, 6);
    assert.equal(actual, 'Win for player2');
  });

// Player 1: 16, Player 2: 14: Win for player1
  it('Player 1: 0, Player 2: 0: Win for player1', async function() {
    let actual = generateOutput(16, 14);
    assert.equal(actual, 'Win for player1');
  });

// Player 1: 14, Player 2: 16: Win for player2
  it('Player 1: 14, Player 2: 16: Win for player2', async function() {
    let actual = generateOutput(14, 16);
    assert.equal(actual, 'Win for player2');
  });
});

function generateOutput(player1Score, player2Score) {
    const player1Name = "player1";
    const player2Name = "player2";
    const tennis = new TennisGame(player1Name, player2Name);
    const increment = (name, count) => {
        for (let i = 0; i < count; i++) {
            tennis.wonPoint(name);
        }
    };
    increment(player1Name, player1Score);
    increment(player2Name, player2Score);
    return tennis.getScore();
}

//Setup
// Player 1: 0, Player 2: 0: Love-All
// Player 1: 1, Player 2: 1: Fifteen-All
// Player 1: 2, Player 2: 2: Thirty-All
// Player 1: 3, Player 2: 3: Deuce
// Player 1: 4, Player 2: 4: Deuce
// Player 1: 1, Player 2: 0: Fifteen-Love
// Player 1: 0, Player 2: 1: Love-Fifteen
// Player 1: 2, Player 2: 0: Thirty-Love
// Player 1: 0, Player 2: 2: Love-Thirty
// Player 1: 3, Player 2: 0: Forty-Love
// Player 1: 0, Player 2: 3: Love-Forty
// Player 1: 4, Player 2: 0: Win for player1
// Player 1: 0, Player 2: 4: Win for player2
// Player 1: 2, Player 2: 1: Thirty-Fifteen
// Player 1: 1, Player 2: 2: Fifteen-Thirty
// Player 1: 3, Player 2: 1: Forty-Fifteen
// Player 1: 1, Player 2: 3: Fifteen-Forty
// Player 1: 4, Player 2: 1: Win for player1
// Player 1: 1, Player 2: 4: Win for player2
// Player 1: 3, Player 2: 2: Forty-Thirty
// Player 1: 2, Player 2: 3: Thirty-Forty
// Player 1: 4, Player 2: 2: Win for player1
// Player 1: 2, Player 2: 4: Win for player2
// Player 1: 4, Player 2: 3: Advantage player1
// Player 1: 3, Player 2: 4: Advantage player2
// Player 1: 5, Player 2: 4: Advantage player1
// Player 1: 4, Player 2: 5: Advantage player2
// Player 1: 15, Player 2: 14: Advantage player1
// Player 1: 14, Player 2: 15: Advantage player2
// Player 1: 6, Player 2: 4: Win for player1
// Player 1: 4, Player 2: 6: Win for player2
// Player 1: 16, Player 2: 14: Win for player1
// Player 1: 14, Player 2: 16: Win for player2
