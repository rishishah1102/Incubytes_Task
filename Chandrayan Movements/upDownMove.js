function upDown(initialDirection, turnDirection, prevDir) {
  if (initialDirection !== "Up" && initialDirection !== "Down") {
    prevDir = initialDirection;
  }
  return {direction: turnDirection === "Up" ? "Up" : "Down", prevDir: prevDir};
}

module.exports = upDown;
