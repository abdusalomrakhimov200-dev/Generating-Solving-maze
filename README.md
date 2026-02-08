# 🧩 Maze Generator & Solver

A simple JavaScript project that generates a random maze and solves it visually using a Depth-First Search (DFS) algorithm.

## 🚀 Features

- 20x20 grid maze
- Random wall generation (30% probability)
- Start point (top-left corner)
- End point (bottom-right corner)
- Animated solving process
- Visual path reconstruction

## 🛠 Technologies Used

- HTML
- CSS (Grid layout)
- Vanilla JavaScript
- DFS (Depth-First Search) algorithm
- Stack-based pathfinding

## 🧠 How It Works

### 1️⃣ Maze Generation
- Creates a 20x20 grid
- Randomly assigns walls
- Ensures start and end cells are always open

### 2️⃣ Maze Solving
- Uses a stack (DFS approach)
- Explores neighboring cells
- Marks visited cells
- Tracks parent nodes
- Reconstructs the final path

## 🎨 Visual Legend

| Color | Meaning |
|-------|----------|
| Dark Blue | Wall |
| Light Blue | Path |
| Purple | Visited |
| Cyan | Start |
| Red | End |


## ▶ How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Watch the maze generate and solve automatically

## 📌 Future Improvements

- Add BFS algorithm option
- Adjustable maze size
- Speed control
- Regenerate button
- Better maze generation algorithm (recursive backtracking)

---

💻 Created as a learning project for practicing algorithms and DOM manipulation.

## 📂 Project Structure
