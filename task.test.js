function forwardBackward(positions, direction) {
  const [x, y, z] = positions;

  switch (direction) {
    case "N":
      return [x, y + 1, z];
    case "S":
      return [x, y - 1, z];
    case "E":
      return [x + 1, y, z];
    case "W":
      return [x - 1, y, z];
    case "Up":
      return [x, y, z + 1];
    case "Down":
      return [x, y, z - 1];
    default:
      return startingPosition;
  }
}

function leftRight(currentDirection, turnDirection) {
  const directions = ["N", "E", "S", "W"];
  const currentIndex = directions.indexOf(currentDirection);

  const changeInDirection = turnDirection === "left" ? -1 : 1;
  const newIndex = (currentIndex + changeInDirection + 4) % 4;

  return directions[newIndex];
}

const initialPosition = [0, 0, 0];
const initialDirection = "E";

describe("Chandrayaan 3 Commands", () => {
//   test("forward backward execution", () => {
//     const expectedFinalPosition = [1, 0, 0];

//     let forwardBackwardResult = forwardBackward(
//       initialPosition,
//       initialDirection
//     );

//     expect(forwardBackwardResult).toEqual(expectedFinalPosition);
//   });

  test("left right execution", () => {
    // const direction = "E";
    const expectedDirection = "N";

    const leftRightResult = leftRight(initialDirection, "left");

    expect(leftRightResult).toEqual(expectedDirection);
  });
});
