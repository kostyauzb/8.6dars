//////////////////////////////////////////////////////// 1-masala
// function findFirstRepeated(gifts) {
//   let indicesMap = new Map();

//   for (let i = 0; i < gifts.length; i++) {
//     const gift = gifts[i];

//     if (indicesMap.has(gift)) {
//       return gift;
//     } else {
//       indicesMap.set(gift, i);
//     }
//   }

//   return -1;
// }

/////////////////////////////////////////////////////////// 2-masala
// function manufacture(gifts, materials) {
//   let availableGifts = [];

//   for (let gift of gifts) {
//     if (canMakeGift(gift, materials)) {
//       availableGifts.push(gift);
//     }
//   }
//   return availableGifts;
// }
// function canMakeGift(gift, materials) {
//   gift = gift.toLowerCase();
//   materials = materials.toLowerCase();
//   for (let char of gift) {
//     if (!materials.includes(char)) {
//       return false;
//     }
//     materials = materials.replace(char, "");
//   }

//   return true;
// }

// ////////////////////////////////////////////////// 3-masala
// function findNaughtyStep(original, modified) {
//   for (let i = 0; i < original.length; i++) {
//     if (original[i] !== modified[i]) {
//       return modified[i];
//     }
//   }

//   return "";
// }

//////////////////////////////////////////////////////////// 4-masala
// function decode(message) {
//   let stack = [];
//   let result = "";

//   for (let char of message) {
//     if (char === "(") {
//       stack.push(result);
//       result = "";
//     } else if (char === ")") {
//       result = stack.pop() + result.split("").reverse().join("");
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

//////////////////////////////////////////////////////// 5-masala
// function cyberReindeer(road, time) {
//   let states = [];
//   let currentState = road;

//   for (let t = 0; t <= time; t++) {
//     states.push(currentState);

//     currentState = updateRoad(currentState);
//   }

//   return states;
// }

// function updateRoad(currentState) {
//   let updatedState = "";

//   for (let i = 0; i < currentState.length; i++) {
//     let char = currentState[i];

//     if (char === "*" && i % 5 === 0) {
//       char = ".";
//     }

//     if (char === "S") {
//       char = ".";
//       if (i + 1 < currentState.length) {
//         updatedState += ".";
//       }
//     }

//     updatedState += char;
//   }

//   return updatedState;
// }

///////////////////////////////////////////////////////////// 6-masala
// function maxDistance(movements) {
//   let maxDist = 0;
//   let currentDist = 0;

//   for (let i = 0; i < movements.length; i++) {
//     let movement = movements[i];

//     if (movement === ">") {
//       currentDist++;
//     } else if (movement === "<") {
//       currentDist--;
//     } else if (movement === "*") {
//       currentDist = Math.max(currentDist + 1, currentDist - 1);
//     }

//     maxDist = Math.max(maxDist, Math.abs(currentDist));
//   }

//   return maxDist;
// }

//////////////////////////////////////////////////////////////// 7-masala
// function drawGift(size, symbol) {
//   let gift = '';

//   for (let i = size - 1; i >= 0; i--) {
//       gift += ' '.repeat(i) + '#' + symbol.repeat(size - i) + '\n';
//   }

//   for (let i = 0; i <= size; i++) {
//       gift += ' '.repeat(i) + '#' + symbol.repeat(size - i) + '\n';
//   }

//   return gift;
// }

// console.log(drawGift(4, '+'));

//////////////////////////////////////////////////////////////////8-masala
