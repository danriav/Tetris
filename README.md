# 🎮 Modern Tetris with TypeScript and Vite

This is a classic **Tetris** project with a modern aesthetic, developed using **TypeScript**, **Vite**, and **HTML5 Canvas**. The goal is to provide a smooth, visually appealing, and easily extensible gaming experience.

![Tetris Preview](https://via.placeholder.com/800x450.png?text=Modern+Tetris+Preview) *(Replace with actual screenshot)*

---

## ✨ Features

- 🕹️ **Classic Gameplay**: All original pieces (I, O, T, S, Z, J, L) with accurate rotation and collision.
- 🎨 **Modern Aesthetic**: Dark design with vibrant neon colors and subtle visual effects.
- 📊 **Scoring System**: Accumulate points based on the number of lines cleared simultaneously.
- 🔮 **Next Piece**: Real-time preview of the next piece entering the game.
- 💀 **Game Over Screen**: Quick restart system to get back into the action instantly.
- 📱 **Clean Design**: Minimalist interface focused on the game board.

---

## 🛠️ Technologies Used

- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strong typing for more robust code).
- **Build Tool**: [Vite](https://vitejs.dev/) (Ultra-fast development server).
- **Rendering**: HTML5 Canvas API.
- **Styling**: Pure CSS3 with a focus on modern design.

---

## 🚀 Installation and Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tetris-ts.git
   cd tetris-ts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit `http://localhost:5173` to start playing.

---

## 🎮 Controls

| Key | Action |
| :--- | :--- |
| `←` / `→` | Move Left / Right |
| `↑` | Rotate Piece |
| `↓` | Fast Drop |
| `Enter` (on Game Over) | Restart Game |

---

## 📂 Project Structure

```text
Tetris/
├── src/
│   ├── main.ts        # Main logic and game loop
│   ├── board.ts       # Board management and line clearing
│   ├── piece.ts       # Piece logic (movement, rotation)
│   └── constants.ts   # Definition of shapes, colors, and sizes
├── index.html         # Base application structure
├── style.css          # Visual styles
└── package.json       # Configuration and dependencies
```

---

## 📝 License

This project is licensed under the MIT License. Feel free to use and improve it!

---

Developed with ❤️ by [Your Name/Username]
