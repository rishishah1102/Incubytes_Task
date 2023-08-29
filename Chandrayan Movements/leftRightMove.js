function leftRightTurn(currentDirection, turnDirection, previousDirection) {
  const directions = ["N", "E", "S", "W"];

  // to find left or right of current direction
  const currentIndex =
    currentDirection === "Up" || currentDirection === "Down"
      ? directions.indexOf(previousDirection)
      : directions.indexOf(currentDirection);

  let newIndex;
  if (currentIndex === 0 && turnDirection === "left") {
    newIndex = 3;
  } else if (currentIndex === 3 && turnDirection === "right") {
    newIndex = 0;
  } else {
    const changeInDirection = turnDirection === "left" ? -1 : 1;
    newIndex = currentIndex + changeInDirection;
  }

  return directions[newIndex];
}

// exporting function
module.exports = leftRightTurn;