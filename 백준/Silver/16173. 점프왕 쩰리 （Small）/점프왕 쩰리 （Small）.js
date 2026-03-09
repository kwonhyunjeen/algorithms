const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0]);

const board = [];

for (let i = 1; i <= N; i++) {
    board.push(input[i].split(' ').map(Number));
}

function bfs() {
    const queue = [[0, 0]];
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        // 끝나는 조건
        if (x === N - 1 && y === N - 1) {
            console.log('HaruHaru');
            return;
        }

        const jump = board[x][y];

        const next = [
            [x, y + jump], // 오른쪽
            [x + jump, y], // 아래
        ];

        for (const [nx, ny] of next) {
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }

    console.log('Hing');
}

bfs();

/*
  (0, 0) (0, 1) (0, 2)
  (1, 0) (1, 1) (1, 2)
  (2, 0) (2, 1) (2, 2)
  */
