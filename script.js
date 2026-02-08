const SIZE = 20;
const mazeEl = document.getElementById("maze");
let cells = [];
let grid = [];
function index(x, y) {
return y * SIZE + x;
}
function generateMaze() {
mazeEl.innerHTML = "";
cells = [];
grid = [];
for (let y = 0; y < SIZE; y++) {
for (let x = 0; x < SIZE; x++) {
const div = document.createElement("div");
div.className = "cell";
const wall = Math.random() < 0.3;
grid.push({
x, y,
wall,
visited: false,
el: div
});
if (wall) div.classList.add("wall");
mazeEl.appendChild(div);
cells.push(div);
}
}
grid[0].wall = false;
grid[grid.length - 1].wall = false;
grid[0].el.classList.remove("wall");
grid[grid.length - 1].el.classList.remove("wall");
grid[0].el.classList.add("start");
grid[grid.length - 1].el.classList.add("end");
}
function solveMaze() {
const stack = [{ x: 0, y: 0 }];
const parent = {};
const timer = setInterval(() => {
if (!stack.length) {
clearInterval(timer);
return;
}
const { x, y } = stack.pop();
const cell = grid[index(x, y)];
if (cell.visited) return;
cell.visited = true;
if (!cell.el.classList.contains("start")) {
cell.el.classList.add("visited");
}
if (x === SIZE - 1 && y === SIZE - 1) {
drawPath(parent, x, y);
clearInterval(timer);
return;
}
const dirs = [
[1, 0], [-1, 0],
[0, 1], [0, -1]
];
dirs.forEach(([dx, dy]) => {
const nx = x + dx;
const ny = y + dy;
if (nx >= 0 && ny >= 0 && nx < SIZE && ny < SIZE) {
const next = grid[index(nx, ny)];
if (!next.wall && !next.visited) {
parent[`${nx},${ny}`] = { x, y };
stack.push({ x: nx, y: ny });
}
}
});
}, 35);
}
function drawPath(parent, x, y) {
let cur = { x, y };
const timer = setInterval(() => {
const key = `${cur.x},${cur.y}`;
const p = parent[key];
if (!p) {
clearInterval(timer);
return;
}
const c = grid[index(p.x, p.y)];
if (!c.el.classList.contains("start")) {
c.el.classList.add("path");
}
cur = p;
}, 40);
}
generateMaze();
setTimeout(solveMaze, 600);
