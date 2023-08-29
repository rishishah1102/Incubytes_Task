function forwardBackward(positions, direction, steps) {
  const [x, y, z] = positions;

  switch (direction) {
    case "N":
      return [x, y + steps, z];
    case "S":
      return [x, y - steps, z];
    case "E":
      return [x + steps, y, z];
    case "W":
      return [x - steps, y, z];
    case "Up":
      return [x, y, z + steps];
    case "Down":
      return [x, y, z - steps];
    default:
      return positions;
  }
}

module.exports = forwardBackward;