
# Chandrayaan 3 Lunar Spacecraft Control Program

Welcome to the Chandrayaan 3 Lunar Spacecraft Control Program. This program allows you to send commands from Earth to the Chandrayaan 3 spacecraft, enabling it to navigate through the galaxy using galactic coordinates (x, y, z). The spacecraft responds to commands for movement, rotation, and changes in orientation.


## Getting Started

To use this program effectively developed along-side with TDD, follow the instructions below:

## Prerequisites

Ensure that you have the following prerequisites in place:

* A connection to the Chandrayaan 3 spacecraft.
* Knowledge of the current starting point (x, y, z) and initial direction (N, S, E, W, Up, Down) of the spacecraft.
* A character array of commands that you want to send to the spacecraft.

## Requirements

1. Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.

2. Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.

3. Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

## Code Structure

* `Chandrayaan Movemnts:` This folder contains the all the movements of the spacecraft :-
    
    * `forwardBackwardMove.js:` This file handles forward and backward movements of the spacecraft. It calculates the new position based on the current position, direction, and the number of steps.
    * `leftRightMove.js:` is responsible for making left and right turns. It updates the current direction of the spacecraft accordingly.
    * `upDownMove.js:` This file handles the change in spacecraft's orientation, rotating it upwards or downwards.

* `Chandrayaan.js:` The runChandrayan3 function orchestrates the execution of commands. It iterates through the given commands and delegates the execution to the appropriate modules. It maintains the current position and direction of the spacecraft.

* `spacecraft.test.js:` This file contains all the test cases developed in jest for all the functions.


## Installation

1. Clone my repository

```bash
  https://github.com/rishishah1102/Incubytes_Task.git
```
2. Navigate to Incubytes_Task directory

```bash
  cd Incubytes_Task
```
2. Install the necessary dependencies

```bash
  npm i
```

## Usage

1. Run program

```bash
  node chandrayan.js
```
2. To change commands, go to chandrayan.js and inside run function change the commands array.
## Example

```
Here's an example of how to use the program with a starting position of (0, 0, 0) and an initial direction of N:

1. Send "f" - The spacecraft moves to (0, 1, 0) while still facing North (N).
2. Send "r" - The spacecraft remains at (0, 1, 0) but now faces East (E).
3. Send "u" - The spacecraft stays at (0, 1, 0) but changes its orientation to Up (U).
4. Send "b" - The spacecraft moves to (0, 1, -1) while still facing Up (U).
5. Send "l" - The spacecraft stays at (0, 1, -1) but changes its facing direction back to North (N).
```


## Technologies

 - [Jest](https://jestjs.io/docs/getting-started) - Testing Framework
 - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The code is written in Javascript Language 
 - [NodeJS](https://nodejs.org/en/docs) - Provides runtime environment for JS
## Authors

- [Rishabh Shah](https://github.com/rishishah1102)
