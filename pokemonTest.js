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
    
function victoryMessage(player1, player2) {
    //when the mainPlayer wins, show a message
    return player1.name + ': ' + player1.winSlogan + '. ' + player2.name + ': ' + player2.loseSlogan + '. Congrats ' + player1.name + ' get ready for the next battle!'; 
  }
  
    console.log(victoryMessage(mainPlayer, computer1))