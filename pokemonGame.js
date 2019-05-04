// This is our Pokemon game!
// Global data
const personNames = ["Andy", "MJ", "Shane", "Nisha", "Howard", "Jay", "Azfar", "Fahad", "Jon", "Rashmi", "Rella", "Robert", "Danni", "Ayna", "Daniel", "Franklin", "Karen", "Maurice", "Tristan"];

const pokemonNames = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Electabuzz", "Machop", "Grimer", "Rhyhorn", "Voltorb", "Lickitung", "Scyther", "Pinsir", "Tangela", "Omanyte", "Kabuto", "Girafarig", "Stantler"];

// a record of game stats
// to be displayed upon the mainPlayers death
const gameStats = {
  opponentsCreated: 0,
  opponentsDefeated: {
    count: 0,
    names: []
  },
  attacksUsed: 0,
  damageDone: 0,
  damageDefended: 0,
}
// This is the player-controlled character as an object
const mainPlayer = {
  name: 'Ryan',
  pokemon: 'Willmon',
  hp: 4,
  attackName: 'codeblast',
  attackValue: 2,
  attackFreq: 0,
  defendName: 'codeshield',
  defendValue: 1,
  defendFreq: 0,
  winSlogan: 'Yay! I won!',
  loseSlogan: 'Oh man...'
}

const bossPlayer = {
  name: 'the Boss',
  pokemon: 'Bowser',
  hp: 6,
  attackName: 'Ultimate Smash',
  attackValue: 3,
  attackFreq: 0,
  defendName: 'codeshield',
  defendValue: 1,
  defendFreq: 0,
  winSlogan: 'No one can defeat me!!',
  loseSlogan: 'It....it\'s impossible....'
}
// this is the first computer-controlled opponent  
const computer2 = createNewOpponent();

// constructor new opponent objects
function TrainerOpponent(name, pokemon, hp, attackName, attackValue, defendName, defendValue, winSlogan, loseSlogan) {
  this.name = name;
  this.pokemon = pokemon;
  this.hp = hp;
  this.attackName = attackName;
  this.attackValue = attackValue;
  this.defendName = defendName;
  this.defendValue = defendValue;
  this.winSlogan = winSlogan;
  this.loseSlogan = loseSlogan;
}
// min is INCLUDED, max is EXCLUDED
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function getUniqueItemFromArray(array) {
  let i = getRandomInt(0, array.length);
  let chosen = array[i];
  array.splice(i, 1);
  return chosen;
}

function createNewOpponent() {
  // name should select random name from an array of student names
  // name should never occur twice
  const name = getUniqueItemFromArray(personNames);
  // pokemon name should be selected from an array of pokemons
  // one time use, like name
  const pokemon = getUniqueItemFromArray(pokemonNames);
  // hp should increment by +1 for each new opponent created
  const hp = gameStats.opponentsCreated + 1;
  // attack name should be selected based on which pokemon was chosen
  const attackName = "Mega Punch";
  // attack value should be random between 1 and 3
  const attackValue = getRandomInt(1, 4);
  // defend name should be selected based on which pokemon was chosen
  const defendName = "Rock Wall";
  // defend value should be 1 or 2
  const defendValue = getRandomInt(1, 3);
  const winSlogan = "The power of science is staggering!";
  const loseSlogan = "Wow. You and your Pokemon’s power levels are amazing! They’re over 9000 for sure!";


  // return new TrainerOpponent with all details
  gameStats.opponentsCreated += 1;
  return new TrainerOpponent(name, pokemon, hp, attackName, attackValue, defendName, defendValue, winSlogan, loseSlogan);
}


function promptUserInfo(player1) {
  const userName = window.prompt('What is your name?', 'Ryan');
  player1.name = userName;
  const userPokemon = window.prompt('What is your pokemon name?', 'Willmon')
  player1.pokemon = userPokemon;
  const userAttackName = window.prompt('What is your favorite attack move?', 'Codeblast')
  player1.attackName = userAttackName;
  const userWinSlogan = window.prompt('What is your winning catch phrase?', 'Yay, I won')
  player1.winSlogan = userWinSlogan;
  return window.alert('Thanks for the info! Get ready for the POKEMON GAME!!!')
}
function introMessage(player1, player2) {
  //the introduction message to the game
  return player1.name + ' and their pokemon ' + player1.pokemon + ' have entered the arena!\nGet ready to battle ' + player2.name + ' and their pokemon ' + player2.pokemon + '...';
}
//intro test...
// console.log(introMessage(mainPlayer, computer1));

function gameSequence(player1, player2, p1Action, p2Action, called) {
  if (called !== true) {
    promptUserInfo(player1);
  }
  window.alert(introMessage(player1, player2));

  function inner() {
    if (hpChecker(player1, player2) === false) {
      //if no player is dead
      window.alert(battle(player1, player2, p1Action, p2Action));
      //call the inner again
      inner();
    } else {
      //otherwise show the alert message
      return hpChecker(player1, player2);
    }
  }
  inner();
}


function battle(player1, player2, p1Action, p2Action) {
  //this is the core of the game!!
  //input is 2 player objects and their choices
  //output returning the updated hp info for both players

  //PROMPT mainPlayer for an action
  let p11Action = prompt('Press 1: Attack, Press 2: Defend');
  p1Action = parseInt(p11Action)
  console.clear()
  //let p1Action = parseInt(Math.random(0, 3) * Math.floor(2));
  p2Action = parseInt(getRandomInt(1, 3));


  //if statement for the action taken 
  if (p1Action === 1 && p2Action === 1) {
    // player1.attackFreq += 1;
    player1.hp = player1.hp - player2.attackValue;
    player2.hp = player2.hp - player1.attackValue;
    gameStats.attacksUsed += 1;
    gameStats.damageDone += player1.attackValue;
    return 'You: ' + player1.pokemon + ' attack with ' + player1.attackName + '!\n...Opponent\'s ' + player2.pokemon + ' takes ' + player1.attackValue + ' damage.\nOppenent: ' + player2.pokemon + ' attack with ' + player2.attackName + '!\n...Your ' + player1.pokemon + ' takes ' + player2.attackValue + ' damage!';
  } else if (p1Action === 1 && p2Action === 2) {
    // player1.attackFreq += 1;
    player2.hp = player2.hp - (player1.attackValue - player2.defendValue);
    gameStats.attacksUsed += 1;
    gameStats.damageDone += (player1.attackValue - player2.defendValue);
    return 'You: ' + player1.pokemon + ' attack with ' + player1.attackName + '! \nOpponent: ' + player2.pokemon + ' defend!\n...' + player2.pokemon + ' only takes ' + (player1.attackValue - player2.defendValue) + ' damage.';
  } else if (p1Action === 2 && p2Action === 1) {
    // player1.defendFreq += 1;
    player1.hp = player1.hp - (player2.attackValue - player1.defendValue);
    gameStats.damageDefended += player1.defendValue;
    return 'You: ' + player1.pokemon + ' defend!\nOpponent: ' + player2.pokemon + ' attack with ' + player2.attackName + '!\n...Your pokemon ' + player1.pokemon + ' only takes ' + (player2.attackValue - player1.defendValue) + ' damage.';
  } else if (p1Action === 2 && p2Action === 2) {
    // player1.defendFreq += 1;
    gameStats.damageDefended += player1.defendValue;
    return 'You: ' + player1.pokemon + ' defend!\nOpponent: ' + player2.pokemon + ' defend!\n...Both pokemon defend.';
  } else {
    window.alert("Please press 1 or 2 only")
    return battle(player1, player2, p1Action, p2Action)
  }
}

function hpChecker(player1, player2) {
  //       console.log('this is one step before the hp check');
  if (player1.hp <= 0) {
    return gameOver(player1, player2);
  } else if (player2.hp <= 0) {
    return victoryMessage(player1, player2);
  }
  return false;
}

// core function
// used to determine the action take by the npc
// can adjust getRandomInt arguments to capture more npc options
function opponentAction() {
  let choice = getRandomInt(1, 3);
  if (choice === 1) {
    return 'attack'
  } else {
    return 'defend'
  }
}



function victoryMessage(player1, player2) {
  //when the mainPlayer wins, show a message
  window.alert('CONGRATS YOU WIN!!!\n' + player1.name + ': ' + player1.winSlogan + ' \n' + player2.name + ': ' + player2.loseSlogan);
  const replay = window.prompt("Are you ready to play the next opponent?\nPress y: 'Yes! Bring it on!'\nPress n: 'No, I need some rest...");
  if (replay === 'n' || replay === 'N') {
    return window.alert("Thanks for playing!");
  } else if (replay === 'y' || replay === 'Y') {
    gameSequence(mainPlayer, bossPlayer, null, p2Action = parseInt(getRandomInt(1, 3)), called = true);
  } else {
    window.alert("Please press 'y' or 'n' only")
    replay = window.prompt("Are you ready to play the next opponent?\nPress y: 'Yes! Bring it on!'\nPress n: 'No, I need some rest...");
  }
}
// victoryMessage test...    
// console.log(victoryMessage(mainPlayer, computer1));

function gameOver(player1, player2) {
  //when the mainPlayer loses, show a message
  return player2.name + ': ' + player2.winSlogan + '\n' + player1.name + ': ' + player1.loseSlogan + '\nGAME OVER...\n\n    Player Stats\nAttack Frequency: ' + gameStats.attacksUsed + '\nDamage Blocked: ' + gameStats.damageDefended;
}
//gameover test...
//console.log(gameOver(mainPlayer, computer1));

//starts the pokemon game!
console.log(gameSequence(mainPlayer, computer2, null, null))
