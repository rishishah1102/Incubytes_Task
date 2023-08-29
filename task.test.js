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

describe("Chandrayaan 3 Commands", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "W";

  test("forward execution", () => {
    const expectedFinalPosition = [-1, 0, 0];

    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  test("backward execution", () => {
    const expectedFinalPosition = [1, 0, 0];

    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      -1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  test("left right execution", () => {
    const expectedDirection = "N";

    const leftRightResult = leftRight(initialDirection, "right");

    expect(leftRightResult).toEqual(expectedDirection);
  });

  test("up down execution", () => {
    const expectedDirection = "Up";

    const upDownResult = upDown(initialDirection, "Up");

    expect(upDownResult).toEqual(expectedDirection);
  });
});
