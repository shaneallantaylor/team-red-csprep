//player object
//computer object
//battle function which can take players input and checks it with the computers object 
//input will be a string 'attack' or 'defend
//

//player 1(10hp): attacks 10    .... computer(5hp): defends 5
// computer hp = player1 attack - computer defend = 5


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
  
  const computer1 = {
    name: 'Rival',
    pokemon: 'Rivalmon',
    hp: 5,
    attackName: 'attack',
    attackValue: 2, 
    defendName: 'defend',
    defendValue: 1,
    winSlogan: 'Haha! I win',
    loseSlogan: 'You got lucky'
  }
    
  function introMessage(player1, player2){
    return player1.name + ' has entered the arena with his pokemon ' + player1.pokemon + '! Get ready to battle ' + player2.name + ' with his pokemon ' + player2.pokemon;
  }
  //intro test...
  // console.log(introMessage(mainPlayer, computer1));
  
  function battle(player1, player2){
  //a tracker who turn it is. Based on turn we need input from the player on which action they like to take
  //if statement for the action taken 
    let playerAction = undefined
    let damage = player1.attackValue
    if(playerAction === 'attack'){
      let description = player1.pokemon + 'attacks with ' + player1.attackName + 'for ' + player1.attackValue + 'damage ' 
        if(opponentAction(player2) === 'defend'){
        damage = player1.attackValue - player2.defendValue
               
      }
      
    }
  }
  //if action is attack we need to look up the attacName and attackValue and store
  //we need to apply the attackName and attackValue to the opponent and 
  //compare attackValues withdefense value
  //mutate the openent object with calculated values. we need to mutate the hp
  //we need to check and see if the opponent has hp <= 0
  //if so we need to initialiaze the victory sequence
  //if not we need to update the turn tracker and do another battle
  function opponentAction(opponent) {
    let choice = parseInt(Math.random(0, 3) * Math.floor(2));
    if(choice === 1){
      return 'attack'
    }return 'defend'
    
  
    
    
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
    console.log(gameOver(mainPlayer, computer1));
  //gameover test...
  //console.log(gameOver(mainPlayer, computer1));
