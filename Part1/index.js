const score = [];

let play = (clickedId) => {
  const playerSpan = document.getElementById('player');
  clickedElement = document.getElementById(clickedId);
  //  console.log(score);



  clickedElement;
  //console.log(score);
  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    //  score.push('O')
    score[clickedId] = 'X'
    clickedElement.innerText = 'X'
    // console.log(score);
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O'
    //  score.push('X')
    score[clickedId] = 'O'
    // console.log(score)
  }
  //So I'm trying to create a funtction to keep count of who is the winner.
  //I for time reasons I didn't do EVERY possible combination of winning combo's
  //because well I dunno. I tracked the state in a boolean in case I needed
  //it later for some reason.
  let topRow = score.slice(0, 3);
  let middleRow = score.slice(3, 6);
  let bottomRow = score.slice(6, 9);
  let Xwinner = false;
  if (((topRow[0] == 'X') && topRow[1] == 'X') && topRow[1] == topRow[2]) {
    Xwinner = true;
    console.log('Winner is X!')
  }
  if (topRow[2] == 'O' && topRow[0] == 'O' && topRow[1] == topRow[2]) {
    console.log('Winner is O')
      Xwinner=false;
  } if (((middleRow[0] == 'X') && middleRow[1] == 'X') && middleRow[1] == middleRow[2]) {
    Xwinner=true;
    console.log('Winner is X')
  } if (middleRow[0] == 'O' && middleRow[1] == 'O' && middleRow[1] == middleRow[2]) {
    Xwinner=false;
    console.log('Winner is O')
  } if (((bottomRow[0] == 'X') && bottomRow[1] == 'X') && bottomRow[1] == bottomRow[2]) {
    Xwinner=true;
    console.log('Winner is X')
  } if (bottomRow[0] == 'O' && bottomRow[1] == 'O' && bottomRow[1] == bottomRow[2]) {
    Xwinner=false;
    console.log('Winner is O')
  }
  //if (topRow.includes('Y') !== true) {
  //   console.log('Winner is X!')
  // }
  console.log(score);
}

