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
    winSlogan: 'Yay! I won!',
    loseSlogan: 'Oh man...'
  }
// this is the first computer-controlled opponent  
  const computer1 = {
    name: 'Gary',
    pokemon: 'Rivalmon',
    hp: 2,
    attackName: 'fire blast',
    attackValue: 2, 
    defendName: 'super shield',
    defendValue: 1,
    winSlogan: 'Haha! I win!',
    loseSlogan: 'You got lucky...'
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
    return player1.name + ' and his pokemon ' + player1.pokemon + ' have entered the area!\nGet ready to battle ' + player2.name + ' and his pokemon ' + player2.pokemon + '...  *dun dun dun*';
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
    } else if (computer1.hp <= 0) {
      return victoryMessage(player1, player2);
    }
    return false;
}


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
