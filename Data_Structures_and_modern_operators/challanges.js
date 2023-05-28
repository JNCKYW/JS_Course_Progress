"use strict";

/*console.log(`------------CHALLANGE-1-----------`);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  //let z = 0;
  //for (let x = 0; x < playerNames.length; x++) {
  //z++;
  //}
  console.log(
    `Today's score is ${playerNames.length} and the scorers are`,
    ...playerNames
  );
};

printGoals(...game.scored);

team2 > team1 && console.log(game.team1);
team1 > team2 && console.log(game.team2);

console.log(`------------CHALLANGE-2-----------`);*/

//TASK 1

for (const [x, y] of game.scored.entries()) {
  console.log(`Goal ${x + 1}: ${y}`);
}

//TASK 2

let avgOdd = 0;
const values1 = Object.values(game.odds);

for (const odd of values1) {
  avgOdd += odd;
}

console.log(`The avarage odd is ${avgOdd / values1.length}`);

//TASK 3
