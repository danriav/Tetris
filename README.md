# 🎮 Tetris Moderno con TypeScript y Vite

Este es un proyecto de **Tetris** clásico pero con una estética moderna, desarrollado utilizando **TypeScript**, **Vite** y **HTML5 Canvas**. El objetivo es proporcionar una experiencia de juego fluida, visualmente atractiva y fácil de extender.

![Tetris Preview](https://via.placeholder.com/800x450.png?text=Tetris+Moderno+Preview) *(Sustituir con captura real)*

---

## ✨ Características

- 🕹️ **Jugabilidad Clásica**: Todas las piezas originales (I, O, T, S, Z, J, L) con rotación y colisiones precisas.
- 🎨 **Estética Moderna**: Diseño oscuro con colores neón vibrantes y efectos visuales sutiles.
- 📊 **Sistema de Puntuación**: Puntos acumulables basados en el número de líneas completadas simultáneamente.
- 🔮 **Próxima Pieza**: Visualización en tiempo real de la siguiente pieza que entrará en juego.
- 💀 **Pantalla de Game Over**: Sistema de reinicio rápido para volver a la acción instantáneamente.
- 📱 **Diseño Limpio**: Interfaz minimalista centrada en el tablero de juego.

---

## 🛠️ Tecnologías Utilizadas

- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (Tipado fuerte para un código más robusto).
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/) (Servidor de desarrollo ultra rápido).
- **Renderizado**: HTML5 Canvas API.
- **Estilos**: CSS3 puro con un enfoque en diseño moderno.

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tetris-ts.git
   cd tetris-ts
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Visita `http://localhost:5173` para empezar a jugar.

---

## 🎮 Controles

| Tecla | Acción |
| :--- | :--- |
| `←` / `→` | Mover a la izquierda / derecha |
| `↑` | Rotar pieza |
| `↓` | Caída rápida |
| `Enter` (en Game Over) | Reiniciar juego |

---

## 📂 Estructura del Proyecto

```text
Tetris/
├── src/
│   ├── main.ts        # Lógica principal y bucle de juego
│   ├── board.ts       # Gestión del tablero y líneas
│   ├── piece.ts       # Lógica de las piezas (movimiento, rotación)
│   └── constants.ts   # Definición de formas, colores y tamaños
├── index.html         # Estructura base de la aplicación
├── style.css          # Estilos visuales
└── package.json       # Configuración y dependencias
```

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. ¡Siéntete libre de usarlo y mejorarlo!

---

Desarrollado con ❤️ por [Tu Nombre/Usuario]
