function forwardBackward(positions, direction) {
    const [x, y, z] = positions;

    switch (direction) {
        case 'N':
            return [x, y + 1, z];
        case 'S':
            return [x, y - 1, z];
        case 'E':
            return [x + 1, y, z];
        case 'W':
            return [x - 1, y, z];
        case 'Up':
            return [x, y, z + 1];
        case 'Down':
            return [x, y, z - 1];
        default:
            return startingPosition
    }
}

describe("Chandrayaan 3 Commands", () => {
  test("forward backward execution", () => {
    const position = [6, 8, 9];
    const direction = "Up";

    const expectedFinalPosition = [6, 8, 10];

    let forwardBackwardResult = forwardBackward(position, direction);

    expect(forwardBackwardResult).toEqual(expectedFinalPosition);
  });
});
