# Agentic Animations

An experiment to learn how to design and code a library of agentic animations. Inspiration from Kevin Grajeda's bloom + HDR on web and Gunnar Gray's Unicode Braille Animations.

Animations designed for macOS menu bar notch, dynamic island, and AI agent chat UIs.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── src/
│   └── components/
│       ├── AnimationCard.tsx   # Base glass-morphism card component
│       └── animations/         # Individual animation components
└── ...
```

## Adding Animations

Create new animation components in `components/animations/` and use them within `AnimationCard` components on the home page.

## Technologies

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
