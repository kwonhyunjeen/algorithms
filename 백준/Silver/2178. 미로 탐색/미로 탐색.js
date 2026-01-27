const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [rows, cols] = input[0].split(' ').map(Number); // 4, 6
const maze = [];


for (let i = 1; i <= rows; i++) {
  maze.push(input[i].split('').map(Number))
}

function bfs() {
  const queue = [{ x: 0, y: 0, step: 1 }]
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const goal = { x: rows - 1, y: cols - 1 };
  
  visited[0][0] = true;

  while (queue.length > 0) {
    const { x, y, step } = queue.shift();
    
    // 종료 조건
    if (x === goal.x && y === goal.y) {
      return step;
    }

    const nexts = [
      { x: x - 1, y: y}, // top 
      { x: x + 1, y: y}, // bottom
      { x: x, y: y - 1}, // left
      { x: x, y: y + 1}  // right
    ]
    
    for (let i = 0; i < nexts.length; i++) {
      const next = nexts[i];

      if (maze[next.x]?.[next.y] !== 1) continue
      if (visited[next.x]?.[next.y]) continue

      queue.push({ x: next.x, y: next.y, step: step + 1});
      visited[next.x][next.y] = true;
    }
  }
}

console.log(bfs());