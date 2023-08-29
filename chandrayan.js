let forwardBackwardMovement = require("./Chandrayan Movements/forwardBackwordMove");
let leftRightTurn = require("./Chandrayan Movements/leftRightMove");
let upDownMovement = require("./Chandrayan Movements/upDownMove");

function runChandrayan3(position, direction, commands) {
  let currentPosition = position;
  let currentDirection = direction;
  let previousDirection = direction;

  // taking each command at a time
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      // forward movement
      case "f":
        currentPosition = forwardBackwardMovement(
          currentPosition,
          currentDirection,
          1
        );
        break;
      // backward movement
      case "b":
        currentPosition = forwardBackwardMovement(
          currentPosition,
          currentDirection,
          -1
        );
        break;
      // right turn
      case "r":
        currentDirection = leftRightTurn(
          currentDirection,
          "right",
          previousDirection
        );
        break;
      // left turn
      case "l":
        currentDirection = leftRightTurn(
          currentDirection,
          "left",
          previousDirection
        );
        break;
      // upward movement
      case "u":
        let resultUp = upDownMovement(
          currentDirection,
          "Up",
          previousDirection
        );
        currentDirection = resultUp.direction;
        previousDirection = resultUp.previousDirection;
        break;
      // backward movement
      case "d":
        let resultDown = upDownMovement(
          currentDirection,
          "Down",
          previousDirection
        );
        currentDirection = resultDown.direction;
        previousDirection = resultDown.previousDirection;
        break;

      default:
        break;
    }
  }

  return { position: currentPosition, direction: currentDirection };
}

// this part is to run code in nodejs
function run() {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";
  const commands = ["f", "r", "u", "b", "d", "l"];

  const result = runChandrayan3(initialPosition, initialDirection, commands);

  console.log(result.direction);
  console.log(result.position);
}
run();

// exporting function
module.exports = runChandrayan3;