const forwardBackward = require("./Chandrayan Movements/forwardBackwordMove");
let leftRight = require("./Chandrayan Movements/leftRightMove");
let upDown = require("./Chandrayan Movements/upDownMove");
const runChandrayan3 = require("./chandrayan");

describe("Chandrayaan 3 Commands", () => {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";
  const commands = ["f", "r", "u", "b", "d", "l"];

  // test for forward movement
  test("forward execution", () => {
    const expectedFinalPosition = [0, 1, 0];

    // calling upward movement function
    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // test for backward movement
  test("backward execution", () => {
    const expectedFinalPosition = [0, -1, 0];

    // calling backward movement function
    let forwardBackwardResult = forwardBackward(
      initialPosition,
      initialDirection,
      -1
    );

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });

  // test for left right movement
  test("left right execution", () => {
    const expectedDirection = "E";

    // Calling left right function
    const leftRightResult = leftRight(initialDirection, "right", null);

    expect(leftRightResult).toEqual(expectedDirection);
  });

  // test for up down movement
  test("up down execution", () => {
    const expectedDirection = "Down";

    // calling upDown function
    const upDownResult = upDown(initialDirection, "Down", null);

    expect(upDownResult.direction).toEqual(expectedDirection);
  });

  // test for successfull landing of chandrayan3
  test("chandrayan3 landed successfully", () => {
    const expectedDirection = "N";
    const expectedFinalPosition = [0, 1, -1];
    const result = runChandrayan3(initialPosition, initialDirection, commands);

    expect(result.position).toEqual(expectedFinalPosition);
    expect(result.direction).toBe(expectedDirection);
  });
});
