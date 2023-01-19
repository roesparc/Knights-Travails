# Knights Travails

This project is a solution to a problem where you need to find the shortest path for a knight to move from one square to another on a standard 8x8 chess board using breadth-first search (BFS) algorithm.

## Problem Statement
A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side. It can face any direction.

## Solution
The solution uses a recursive function `knightMoves` that takes the starting and ending squares as arguments and uses a queue to store possible squares the knight can move to from the current square. If the current square is the ending square, it returns the current square. Else, it generates all possible moves, checks if they're within the chess board's boundaries, adds them to the queue and calls itself with the updated queue, storing the returned value. It then checks if the first element of the returned value is in the `directChildren` array and if so, it creates an array of the path, prints it (when the recursion reaches the starting point) and returns it. If not, it returns the returned value.

## How to Use
To use the function, simply call `knightMoves(start, end)` where `start` is the starting square and `end` is the ending square. The squares should be represented as arrays with 2 elements representing the x and y coordinates.

For example, `knightMoves([0, 0], [7, 7])` will return the shortest path for the knight to move from the bottom-left corner to the top-right corner of the chess board.

## Output
The output will be in the format of:
```
You made it in x moves! Here's your path:
[x, y]
[x, y]
...
```
