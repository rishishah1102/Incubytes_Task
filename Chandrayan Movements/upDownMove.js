function upDownMovement(initialDirection, turnDirection, previousDirection) {
  // tracking previous state
  if (initialDirection !== "Up" && initialDirection !== "Down") {
    previousDirection = initialDirection;
  }
  return {
    direction: turnDirection === "Up" ? "Up" : "Down",
    previousDirection: previousDirection,
  };
}

// exporting function
module.exports = upDownMovement;