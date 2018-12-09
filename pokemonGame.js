// This is our Pokemon game!


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
    winSlogan: 'Yay! I won',
    loseSlogan: 'Oh man'
  }
// this is the first computer-controlled opponent  
  const computer1 = {
    name: 'Rival',
    pokemon: 'Rivalmon',
    hp: 2,
    attackName: 'attack',
    attackValue: 2, 
    defendName: 'defend',
    defendValue: 1,
    winSlogan: 'Haha! I win',
    loseSlogan: 'You got lucky'
  }
    
  function introMessage(player1, player2){
    //the introduction message to the game
    return player1.name + ' has entered the arena with his pokemon ' + player1.pokemon + '! Get ready to battle ' + player2.name + ' with his pokemon ' + player2.pokemon + '!';
  }
  //intro test...
  // console.log(introMessage(mainPlayer, computer1));
  
  function gameSequence(player1, player2, p1Action, p2Action) {
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
  console.log(gameSequence(mainPlayer, computer1, 1, 2))

  function battle(player1, player2, p1Action, p2Action) {
    //this is the core of the game!!
    //input is 2 player objects and their choices
    //output returning the updated hp info for both players
    
    //PROMPT mainPlayer for an action
    
    
  //if statement for the action taken 
		if (p1Action === 1 && p2Action === 1) {
      player1.hp = player1.hp - player2.attackValue;
      player2.hp = player2.hp - player1.attackValue;
      return "the message if both players attack";
    } else if (p1Action === 1 && p2Action === 2) {
      player2.hp = player2.hp - (player1.attackValue - player2.defendValue); 
			return player1.pokemon + 'attacks with ' + player1.attackName + 'for ' + player1.attackValue + 'damage ';
    } else if (p1Action === 2 && p2Action === 1) {
      player1.hp = player1.hp - (player2.attackValue - player1.defendValue);
      return "the message if p1 defends, and p2 attacks";
    } else {
      return "you both defended! how cowardly!";
    }
  }

function hpChecker(player1, player2) {
//       console.log('this is one step before the hp check');
    if (player1.hp <= 0) {
     return gameOver(player1, player2);
    } else if (computer1.hp <= 0) {
      return victoryMessage(player1, player2);
    }
    return false;
}

// console.log(introMessage(mainPlayer, computer1));
// console.log(battle(mainPlayer, computer1, 1, 1));
// console.log("now the mainPlayer HP is:", mainPlayer.hp);
// console.log("now the computer1 HP is:", computer1.hp);
// console.log(hpChecker(mainPlayer, computer1));


// console.log(battle(mainPlayer, computer1, 1, 2));
// console.log("now the mainPlayer HP is:", mainPlayer.hp);
// console.log("now the computer1 HP is:", computer1.hp);
// console.log(battle(mainPlayer, computer1, 2, 1));
// console.log("now the mainPlayer HP is:", mainPlayer.hp);
// console.log("now the computer1 HP is:", computer1.hp);
// console.log(battle(mainPlayer, computer1, 2, 2));
// console.log("now the mainPlayer HP is:", mainPlayer.hp);
// console.log("now the computer1 HP is:", computer1.hp);
// console.log("hp starts at 5, expecting new hp to be 4, actual is:", computer1.hp);
  
  //         if (opponentAction(player2) === 'defend') {
//         damage = player1.attackValue - player2.defendValue;  
  
  //if action is attack we need to look up the attacName and attackValue and store
  //we need to apply the attackName and attackValue to the opponent and 
  //compare attackValues withdefense value
  //mutate the openent object with calculated values. we need to mutate the hp
  //we need to check and see if the opponent has hp <= 0
  //if so we need to initialiaze the victory sequence
  //if not we need to update the turn tracker and do another battle



  function opponentAction(opponent) {
    // This needs to be refactored! 
    //generates a random number 0 or 1
    //if it is 1 returns the string 'attack'
    //else if it is 0 returns the string 'defend'
    let choice = parseInt(Math.random(0, 3) * Math.floor(2));
    if(choice === 1){
      return 'attack'
    }
    return 'defend' 
  }


  function victoryMessage(player1, player2) {
      //when the mainPlayer wins, show a message
      return player1.name + ': ' + player1.winSlogan + '. \n' + player2.name + ': ' + player2.loseSlogan; 
    }
  // victoryMessage test...   
  // console.log(victoryMessage(mainPlayer, computer1));
    
  
  function gameOver(player1, player2) {
      //when the mainPlayer loses, show a message
      return player2.name + ': ' + player2.winSlogan + '\n'+ player1.name + ': ' + player1.loseSlogan + '\nGAME OVER...\n\n    Player Stats\nAttack Frequency: ' + player1.attackFreq + '\nDefend Frequency: ' + player1.defendFreq; 
    }
  //gameover test...
//console.log(gameOver(mainPlayer, computer1));