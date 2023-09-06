let forwardBackwardMovement = require("./Chandrayan Movements/forwardBackwordMove");
let leftRightTurn = require("./Chandrayan Movements/leftRightMove");
let upDownMovement = require("./Chandrayan Movements/upDownMove");
const runChandrayan3 = require("./chandrayan");

// test for spacecraft movement in North Direction
describe("North Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [0, 1, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [0, -1, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  test("left direction", () => {
    const expectedDirection = "W";

    // Calling leftRight function
    const leftResult = leftRightTurn(initialDirection, "left", null);

    // comparison
    expect(leftResult).toEqual(expectedDirection);
  });

  // right turn
  test("right direction", () => {
    const expectedDirection = "E";

    // Calling leftRight function
    const rightResult = leftRightTurn(initialDirection, "right", null);

    // comparison
    expect(rightResult).toEqual(expectedDirection);
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// test for spacecraft movement in East Direction
describe("East Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "E";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [1, 0, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [-1, 0, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  test("left direction", () => {
    const expectedDirection = "N";

    // Calling leftright function
    const leftResult = leftRightTurn(initialDirection, "left", null);

    // comparison
    expect(leftResult).toEqual(expectedDirection);
  });

  // right turn
  test("right direction", () => {
    const expectedDirection = "S";

    // Calling leftright function
    const rightResult = leftRightTurn(initialDirection, "right", null);

    // comparison
    expect(rightResult).toEqual(expectedDirection);
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// test for spacecraft movement in South Direction
describe("South Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "S";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [0, -1, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [0, 1, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  test("left direction", () => {
    const expectedDirection = "E";

    // Calling leftright function
    const leftResult = leftRightTurn(initialDirection, "left", null);

    // comparison
    expect(leftResult).toEqual(expectedDirection);
  });

  // right turn
  test("right direction", () => {
    const expectedDirection = "W";

    // Calling leftright function
    const rightResult = leftRightTurn(initialDirection, "right", null);

    // comparison
    expect(rightResult).toEqual(expectedDirection);
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// test for spacecraft movement in West Direction
describe("West Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "W";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [-1, 0, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [1, 0, 0];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  test("left direction", () => {
    const expectedDirection = "S";

    // Calling leftright function
    const leftResult = leftRightTurn(initialDirection, "left", null);

    // comparison
    expect(leftResult).toEqual(expectedDirection);
  });

  // right turn
  test("right direction", () => {
    const expectedDirection = "N";

    // Calling leftright function
    const rightResult = leftRightTurn(initialDirection, "right", null);

    // comparison
    expect(rightResult).toEqual(expectedDirection);
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// test for spacecraft movement in Up Direction
describe("Up Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "Up";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [0, 0, 1];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [0, 0, -1];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  describe("Up-Left turn", () => {

    // Turn to N direction
    test("left-North direction", () => {
      const expectedDirection = "N";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "E"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to E direction
    test("left-East direction", () => {
      const expectedDirection = "E";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "S"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to S direction
    test("left-South direction", () => {
      const expectedDirection = "S";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "W"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to W direction
    test("left-West direction", () => {
      const expectedDirection = "W";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "N"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });
  });

  // right turn
  describe("Up-Right turn", () => {

    // Turn to N direction
    test("right-North direction", () => {
      const expectedDirection = "N";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "W"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to E direction
    test("right-East direction", () => {
      const expectedDirection = "E";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "N"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to S direction
    test("right-South direction", () => {
      const expectedDirection = "S";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "E"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to W direction
    test("right-West direction", () => {
      const expectedDirection = "W";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "S"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// test for spacecraft movement in Down Direction
describe("Down Direction", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "Down";

  // forward movement
  test("forward movement", () => {
    const expectedFinalPosition = [0, 0, -1];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // backward movement
  test("backward movement", () => {
    const expectedFinalPosition = [0, 0, 1];

    // calling forwardBackwardMovement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // left turn
  describe("Down-Left turn", () => {

    // Turn to N direction
    test("left-North direction", () => {
      const expectedDirection = "N";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "E"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to E direction
    test("left-East direction", () => {
      const expectedDirection = "E";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "S"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to S direction
    test("left-South direction", () => {
      const expectedDirection = "S";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "W"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to W direction
    test("left-West direction", () => {
      const expectedDirection = "W";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "left", "N"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });
  });

  // right turn
  describe("Down-Right turn", () => {

    // Turn to N direction
    test("right-North direction", () => {
      const expectedDirection = "N";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "W"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to E direction
    test("right-East direction", () => {
      const expectedDirection = "E";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "N"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to S direction
    test("right-South direction", () => {
      const expectedDirection = "S";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "E"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });

    // Turn to W direction
    test("right-West direction", () => {
      const expectedDirection = "W";

      // Calling leftright function
      const leftResult = leftRightTurn(initialDirection, "right", "S"); // We need to provide a reference direction for this to execute

      // comparison
      expect(leftResult).toEqual(expectedDirection);
    });
  });

  // up face
  test("up execution", () => {
    const expectedDirection = "Up";

    // calling upDown function
    const upResult = upDownMovement(initialDirection, "Up", null);

    // comparison
    expect(upResult.direction).toEqual(expectedDirection);
  });

  // down face
  test("down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const downResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(downResult.direction).toEqual(expectedDirection);
  });
});

// main test related to chandrayan-3
describe("Chandrayaan 3 Commands", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";
  const commands = ["f", "r", "u", "b", "d", "l"];

  // test for successfull landing of chandrayan3
  test("chandrayan3 landed successfully", () => {
    const expectedDirection = "N";
    const expectedFinalPosition = [0, 1, -1];

    // calling chandrayan function
    const result = runChandrayan3(initialPosition, initialDirection, commands);

    // comparison
    expect(result.position).toEqual(expectedFinalPosition);
    expect(result.direction).toBe(expectedDirection);
  });
});
