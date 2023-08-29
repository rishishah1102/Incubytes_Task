let forwardBackward = require("./Chandrayan Movements/forwardBackwordMove");
let leftRight = require("./Chandrayan Movements/leftRightMove");
let upDown = require("./Chandrayan Movements/upDownMove");

function runChandrayan3(position, direction, commands) {
  let currentPosition = position;
  let currentDirection = direction;
  let prevDir = null;

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
        currentDirection = leftRight(currentDirection, "right", prevDir);
        break;
      case "l":
        currentDirection = leftRight(currentDirection, "left", prevDir);
        break;
      case "u":
        let resultUp = upDown(currentDirection, "Up", prevDir);
        currentDirection = resultUp.direction;
        prevDir = resultUp.prevDir;
        break;
      case "d":
        let resultDown = upDown(currentDirection, "Down", prevDir);
        currentDirection = resultDown.direction;
        prevDir = resultDown.prevDir;
        break;

      default:
        break;
    }
  }

  return { position: currentPosition, direction: currentDirection };
}

function run() {
  const initialPosition = [0, 0, 0];
  const initialDirection = "N";
  const commands = ["f", "r", "u", "b", "d", "l"];

  const result = runChandrayan3(initialPosition, initialDirection, commands);

  console.log(result.direction);
  console.log(result.position);
}
run();

module.exports = runChandrayan3;
