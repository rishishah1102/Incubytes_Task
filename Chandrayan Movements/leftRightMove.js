function leftRight(currentDirection, turnDirection, prevDir) {
  const directions = ["N", "E", "S", "W"];
  const currentIndex =
    currentDirection === "Up" || currentDirection === "Down"
      ? directions.indexOf(prevDir)
      : directions.indexOf(currentDirection);

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

module.exports = leftRight;
