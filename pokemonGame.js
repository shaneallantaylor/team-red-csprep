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
    hp: 10,
    attackName: 'codeblast',
    attackValue: 2, 
    attackFreq: 0,
    defendName: 'codeshield',
    defendValue: 1,
    defendFreq: 0,
    winSlogan: 'Yay! I won!',
    loseSlogan: 'Oh man...'
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
      return window.alert('Pikachu: Thanks for the info! Get ready for the POKEMON GAME!!!')
  }
  function introMessage(player1, player2){
    //the introduction message to the game
    return player1.name + ' and their pokemon ' + player1.pokemon + ' have entered the area!\nGet ready to battle ' + player2.name + ' and their pokemon ' + player2.pokemon + '...  *dun dun dun*';
  }
  //intro test...
  // console.log(introMessage(mainPlayer, computer1));
  
  function gameSequence(player1, player2, p1Action, p2Action) {
      promptUserInfo(player1);
      window.alert(introMessage(player1, player2));
      function inner() {
      if (hpChecker(player1, player2) === false) {
        //if no player is dead
        window.alert(battle(player1, player2, p1Action, p2Action));
        //call the inner again (recursion)
        inner();
      } else {
          //otherwise show the alert message
          window.alert(hpChecker(player1, player2));
      }
    }
    inner();
  }
  console.log(gameSequence(mainPlayer, computer2, 1, 2))

  function battle(player1, player2, p1Action, p2Action) {
    //this is the core of the game!!
    //input is 2 player objects and their choices
    //output returning the updated hp info for both players
    
    //PROMPT mainPlayer for an action
    
    
  //if statement for the action taken 
		if (p1Action === 1 && p2Action === 1) {
      player1.hp = player1.hp - player2.attackValue;
      player2.hp = player2.hp - player1.attackValue;
      return player2.pokemon + ' attacks with ' + player2.attackName + ' for ' + player2.attackValue + ' damage!\n' + player1.pokemon + ' attacks with ' + player1.attackName + ' for ' + player1.attackValue + ' damage!';
    } else if (p1Action === 1 && p2Action === 2) {
      player2.hp = player2.hp - (player1.attackValue - player2.defendValue); 
			return player2.pokemon + ' defends with ' + player2.defendName + '!\n' + player1.pokemon + ' attacks with ' + player1.attackName + ' for ' + (player1.attackValue - player2.defendValue) + ' damage!';
    } else if (p1Action === 2 && p2Action === 1) {
      player1.hp = player1.hp - (player2.attackValue - player1.defendValue);
      return player1.pokemon + ' defends with ' + player1.defendName + '!\n' + player2.pokemon + ' attacks with ' + player2.attackName + ' for ' + (player2.attackValue - player1.defendValue) + ' damage!';
    } else {
      return "Both pokemon defended! How cowardly!";
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
    let choice = getRandomInt(1,3);
    if(choice === 1) {
      return 'attack'
    } else {
	    return 'defend' 
	}
  }



  function victoryMessage(player1, player2) {
      //when the mainPlayer wins, show a message
      return 'CONGRATS YOU WIN!!!\n' + player1.name + ': ' + player1.winSlogan + ' \n' + player2.name + ': ' + player2.loseSlogan; 
    }
  // victoryMessage test...   
  // console.log(victoryMessage(mainPlayer, computer1));
    
  
  function gameOver(player1, player2) {
      //when the mainPlayer loses, show a message
      return player2.name + ': ' + player2.winSlogan + '\n'+ player1.name + ': ' + player1.loseSlogan + '\nGAME OVER...\n\n    Player Stats\nAttack Frequency: ' + player1.attackFreq + '\nDefend Frequency: ' + player1.defendFreq; 
    }
  //gameover test...
//console.log(gameOver(mainPlayer, computer1));
