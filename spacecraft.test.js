let forwardBackwardMovement = require("./Chandrayan Movements/forwardBackwordMove");
let leftRightTurn = require("./Chandrayan Movements/leftRightMove");
let upDownMovement = require("./Chandrayan Movements/upDownMove");
const runChandrayan3 = require("./chandrayan");

// all the unit test related to chandrayan-3
describe("Chandrayaan 3 Commands", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";
  const commands = ["f", "r", "u", "b", "d", "l"];

  // test for forward movement
  test("forward execution", () => {
    const expectedFinalPosition = [0, 1, 0];

    // calling upward movement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // test for backward movement
  test("backward execution", () => {
    const expectedFinalPosition = [0, -1, 0];

    // calling backward movement function
    let forwardBackwardResult = forwardBackwardMovement(
      initialPosition,
      initialDirection,
      -1
    );

    // comparison
    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // test for left right movement
  test("left right execution", () => {
    const expectedDirection = "E";

    // Calling left right function
    const leftRightResult = leftRightTurn(initialDirection, "right", null);

    // comparison
    expect(leftRightResult).toEqual(expectedDirection);
  });

  // test for up down movement
  test("up down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const upDownResult = upDownMovement(initialDirection, "Down", null);

    // comparison
    expect(upDownResult.direction).toEqual(expectedDirection);
  });

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
