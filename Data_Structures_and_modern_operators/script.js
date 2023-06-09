"use strict";

// Data needed for a later exercise
//const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterID, mainID) {
    return [this.starterMenu[starterID], this.mainMenu[mainID]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    address = `its destination`,
    mainID = 1,
    delTime = `as soon as possible`,
    starterID = 0,
  }) {
    console.log(
      `Your Delivery is 
      lmost complete. ${this.starterMenu[starterID]} and ${this.mainMenu[mainID]} will be delivered to ${address} at ${delTime}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Pizza with ${mainIng} and ${otherIng}`);
  },
};

restaurant.orderDelivery({
  delTime: `21:30`,
  starterID: 2,
  mainID: 2,
  address: `piotrkowska 123`,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  menu = [],
} = restaurant;

console.log(restaurantName, hours, tags, menu);

let a = 2;
let b = 1;

const obj = { a: 10, b: 20, c: 30 };

({ a, b } = obj);
console.log(a, b);

const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , secondary] = restaurant.categories;
// console.log(first, secondary);

// [first, secondary] = [secondary, first];
// console.log(first, secondary);

// const nested = [2, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//console.log(restaurant.order(2, 0));

//const [starter, main] = restaurant.order(2, 0);
//console.log(starter, main);

const xxx = {
  buba: `BUBA`,
  czoko: `CZOKO`,
  shaggy: `SHAGGY`,
  pets: {
    age1: 8,
    age2: [8, 1],
  },
};

const {
  pets: {
    age2: [czokoAge, humusAge],
  },
} = xxx;

console.log(czokoAge, humusAge);

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...newArr);

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const newMenu = [...mainMenu, `gnocci`];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...mainMenu];

//Join 2 or more arrays together
const menu2 = [...starterMenu, ...mainMenu];
console.log(menu);

/*const ingredients = [
  prompt(`ingredient 1: `),
  prompt(`ingredient 2: `),
  prompt(`ingredient 3: `),
];

restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: `Guiseppe`, foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];

const menu2 = [...starterMenu, ...mainMenu];

const [pizza, , risotto, ...otherFood] = menu2;

console.log(pizza, risotto, otherFood);

const {
  openingHours: {
    sat: { open: open1, close: close1 },
    ...weekdays
  },
} = restaurant;

console.log(weekdays);
console.log(open1, close1);

const add = function (...numbers) {
  let sum = 0;
  for (let x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }
  console.log(numbers, sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const d = [10, 20, 30];

add(...d);

restaurant.orderPizza(`buba`, `czoko`, `shaggy`);
restaurant.orderPizza(`buba`);

console.log(0 || `text`);
console.log(undefined || null || 0 || 3);

restaurant.guestNum = 10;

//zamiast tego poniżej zrób short circuiting z operatorem ||
const guests = restaurant.guestNum ? restaurant.guestNum : 0;
console.log(guests);

const guests2 = restaurant.guestNum || 0;
console.log(guests2);

console.log(`------------^^^---OR---^^^---------------`);
console.log(`------------vvv---AND---vvv--------------`);

console.log(7 && 0);
console.log(10 && 9 && null && 3);
console.log(`text` && 3 && `buba`);

//zamiast tego poniżej zrób short circuiting z operatorem &&
if (restaurant.orderPizza) {
  console.log(
    restaurant.orderPizza(`mushrooms`, `mozarella`, `chorizo`, `olives`)
  );
}

restaurant.orderPizza &&
  restaurant.orderPizza(`mushrooms`, `mozarella`, `chorizo`, `olives`);

restaurant.guestNum = 0;

const guests2 = restaurant.guestNum || 10;
console.log(guests2);

const nullishGuests = restaurant.guestNum ?? 0;
console.log(nullishGuests);

const rest1 = {
  name: `Capri`,
  numGuests: 0,
};

const rest2 = {
  name: `Buba`,
  owner: `Czoko`,
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest2.owner &&= `<ANONYMOUS>`;

console.log(rest2.owner);

let michal = 10;

michal &&= 20;

console.log(michal);


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterID, mainID) {
    return [this.starterMenu[starterID], this.mainMenu[mainID]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery({
    address = `its destination`,
    mainID = 1,
    delTime = `as soon as possible`,
    starterID = 0,
  }) {
    console.log(
      `Your Delivery is 
      lmost complete. ${this.starterMenu[starterID]} and ${this.mainMenu[mainID]} will be delivered to ${address} at ${delTime}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(`Pizza with ${mainIng} and ${otherIng}`);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [x, y] of menu.entries()) {
  console.log(`${x + 1}: ${y}`);
}

//OPTIONAL CHAINING

console.log(restaurant.openingHours.mon?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `we are closed`;
  console.log(`${day} we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? `Nie ma takiej metody`);

const arr = [{ name: `Janusz`, age: 24 }];

console.log(arr[0]?.name ?? `tablica jest pusta`);

//OBJECTS FOR LOOP

const names = Object.keys(restaurant.openingHours);
let str = `We are open on: `;

for (const day of names) {
  str += `${day}, `;
}
console.log(str);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we are open at ${open} and closed ${close}`);
}


console.log(`#########################################`);
console.log(`#######-----------SETS------------#######`);
console.log(`#########################################`);
const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Pasta`,
  `Pizza`,
  `Risotto`,
]);

console.log(ordersSet);

console.log(new Set(`Jonas`));

console.log(ordersSet.size);
console.log(ordersSet.has(`Pizza`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
console.log(ordersSet);
ordersSet.delete(`Pizza`);
console.log(ordersSet);
//ordersSet.clear()  -  usuwa wszystkie dane z setu

for (const x of ordersSet) {
  console.log(x);
}

let arr = [`a`, `b`, `c`, `a`, `b`];

let newSet = new Set(arr);
arr = [...newSet];
console.log(newSet);
console.log(arr);

newSet = [...newSet];
console.log(newSet);

console.log(`#########################################`);
console.log(`#######-----------MAPS------------#######`);
console.log(`#########################################`);

const rest = new Map();

rest.set(`name`, `Classico Italiano`);
rest
  .set(1, `Wawa`)
  .set(2, `LDZ`)
  .set(`open`, 11)
  .set(`close`, 22)
  .set(true, `We are open`)
  .set(false, `We are closed`);

console.log(rest);

const time = 12;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

rest.delete(`open`);
console.log(rest);
console.log(rest.has(true));
console.log(rest.size);
//rest.clear(); - usuwa całą mape

const arr1 = [1, 2];
rest.set(arr1, `TEST`);

console.log(rest.get(arr1));

rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest);

const question = new Map([
  [`question`, `What is the best prog language?`],
  [1, `JS`],
  [2, `C++`],
  [3, `Python`],
  [`correct`, 1],
  [true, `BRAVO`],
  [false, `TRY AGAIN!`],
]);

console.log(question);

// const mapHours = new Map(Object.entries(restaurant.openingHours));
// console.log(mapHours);

console.log(question.get(`question`));

for (const [a, b] of question) {
  if (typeof a === `number`) {
    console.log(a, b);
  }
}

// const answer = Number(prompt(`ANSWER`));
const answer = 1;

console.log(question.get(answer === question.get(`correct`)));


const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane.length);
console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  console.log(
    seat.slice(-1) === `B` || seat.slice(-1) === `E`
      ? `middle seat`
      : `window or corridor seat`
  );
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`11C`);
checkMiddleSeat(`11E`);


const airline = `TAP Air Portugal`;
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = `jOnas`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = `hello@jonas.io`;
const loginEmail = `  Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);

const priceGB = `288,97$`;
const priceUS = priceGB.replace(`$`, `#`).replace(`,`, `.`);
console.log(priceUS);

const buba = `buba buba`;
console.log(buba.replaceAll(`buba`, `Czoko`));

//Booleans

const plane = `A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.startsWith(`B`));
console.log(plane.endsWith(`o`));
*/

console.log(`nice+string+here`.split(`+`));

const [firstName, lastName] = `Janusz Wojciechowski`.split(` `);

const newName = [`Mr.`, firstName, lastName].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  let arr = name.split(` `);
  let i = 0;
  for (let x of arr) {
    arr[i] = x[0].toUpperCase() + x.slice(1);
    i++;
  }
  return console.log(arr.join(` `));
};
capitalizeName(`janusz wojciechowski`);
capitalizeName(`janusz waldemar jan wojciechowski`);

const message = `Go to gate 23!`;

console.log(message.padStart(25, `+`));
console.log(message.padEnd(25, `-`));

const masking = function (number) {
  number += ``;
  const lastFour = number.slice(-4);
  console.log(lastFour.padStart(number.length, `*`));
};

masking(12345678123213378);
masking(`12345678`);
masking(12345678910);

const message2 = `Bad weather... All flights delayed // `;
console.log(message2.repeat(5));

const planesInLine = function (x) {
  console.log(`There are ${x} planes in line ${`3==D `.repeat(x)}`);
};

planesInLine(4);
