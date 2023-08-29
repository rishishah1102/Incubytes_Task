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

function leftRight(currentDirection, turnDirection) {
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

let prevDir;
function upDown(initialDirection, turnDirection) {
  if (initialDirection !== "Up" && initialDirection !== "Down") {
    prevDir = initialDirection;
  }
  return turnDirection === "Up" ? "Up" : "Down";
}

function runChandrayan3(position, direction, commands) {
  let currentPosition = position;
  let currentDirection = direction;

  for (let index = 0; index < commands.length; index++) {
    switch (commands[index]) {
      case "f":
        currentPosition = forwardBackward(currentPosition, currentDirection, 1);
        break;
      case "b":
        currentPosition = forwardBackward(
          currentPosition,
          currentDirection,
          -1
        );
        break;
      case "r":
        currentDirection = leftRight(currentDirection, "right");
        break;
      case "l":
        currentDirection = leftRight(currentDirection, "left");
        break;
      case "u":
        currentDirection = upDown(currentDirection, "Up");
        break;
      case "d":
        currentDirection = upDown(currentDirection, "Down");
        break;

      default:
        break;
    }
  }

  return { position: currentPosition, direction: currentDirection };
}

describe("Chandrayaan 3 Commands", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";

  test("forward execution", () => {
    const expectedFinalPosition = [0, 1, 0];

    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  test("backward execution", () => {
    const expectedFinalPosition = [0, -1, 0];

    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      -1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  test("left right execution", () => {
    const expectedDirection = "E";

    const leftRightResult = leftRight(initialDirection, "right");

    expect(leftRightResult).toEqual(expectedDirection);
  });

  test("up down execution", () => {
    const expectedDirection = "Down";

    const upDownResult = upDown(initialDirection, "Down");

    expect(upDownResult).toEqual(expectedDirection);
  });

  const commands = ["f", "r", "u", "b", "d", "l"];
  test("chandrayan3 landed successfully", () => {
    const expectedDirection = "N";
    const expectedFinalPosition = [0, 1, -1];
    const result = runChandrayan3(initialPosition, initialDirection, commands);

    expect(result.position).toEqual(expectedFinalPosition);
    expect(result.direction).toBe(expectedDirection);
  });
});
