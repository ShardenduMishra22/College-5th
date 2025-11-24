# React Components Library

A comprehensive collection of 50+ React components ranging from beginner to advanced levels, implementing common UI patterns and interactive features.

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## 📦 Components List

### Beginner Components (1-10)

1. **Accordion** - Expandable/collapsible sections with smooth animations
2. **Contact Form** - Form with validation and API integration
3. **Holy Grail Layout** - Classic responsive layout pattern
4. **Progress Bars** - Multiple animated progress bars
5. **Mortgage Calculator** - Financial calculator with real-time updates
6. **Flight Booker** - Date picker with validation for one-way/round-trip flights
7. **Generate Table** - Dynamic table generator with custom rows/columns
8. **Progress Bar** - Single animated progress bar with controls
9. **Temperature Converter** - Celsius ↔️ Fahrenheit converter
10. **Tweet Component** - Twitter-style tweet card with interactions

### Intermediate Components (11-25)

11. **Tabs** - Tabbed interface with ARIA support
12. **Data Table** - Paginated table with API data fetching
13. **Dice Roller** - Interactive dice rolling game
14. **File Explorer** - Tree view file system navigator
15. **Like Button** - Button with loading and error states
16. **Modal Dialog** - Accessible modal with overlay
17. **Star Rating** - Interactive star rating component
18. **Traffic Light** - Animated traffic signal simulator
19. **Digital Clock** - Real-time digital clock display
20. **Tic-Tac-Toe** - Classic game with win detection
21. **Image Carousel** - Image slider with navigation and indicators
22. **Job Board** - Hacker News jobs with lazy loading
23. **Stopwatch** - Timer with start/stop/reset functionality
24. **Transfer List** - Dual list box for moving items between lists

### Advanced Components (26+)

25. **Auth Code Input** - OTP/PIN code input with auto-focus
26. **Analog Clock** - SVG-based analog clock with moving hands
27. **Selectable Cells** - Grid with mouse drag selection
28. **Wordle** - Word guessing game clone
29. **Connect Four** - Classic board game with win detection
30. **Grid Lights** - Interactive grid activation game

## 🎨 Features

- **TypeScript Support** - Fully typed components
- **Responsive Design** - Mobile-friendly layouts
- **Accessibility** - ARIA attributes and keyboard navigation
- **Animations** - Smooth transitions and effects
- **State Management** - React hooks (useState, useEffect, useRef)
- **API Integration** - Fetch data from external APIs
- **Form Validation** - Input validation and error handling
- **Game Logic** - Win detection, scoring, and game states

## 🛠️ Technologies

- React 18+
- TypeScript
- Vite
- CSS3 with animations
- Modern ES6+ JavaScript

## 📂 Project Structure

```
src/
├── components/
│   ├── Accordion.tsx
│   ├── ContactForm.tsx
│   ├── ... (30+ components)
│   └── Components.css (shared styles)
├── App.tsx (component showcase)
├── main.tsx
└── index.css
```

## 🎯 Key Concepts Demonstrated

- **State Management**: useState for local state
- **Side Effects**: useEffect for timers, API calls
- **Refs**: useRef for DOM access and mutable values
- **Event Handling**: Mouse, keyboard, form events
- **Conditional Rendering**: Dynamic UI based on state
- **Lists & Keys**: Efficient rendering of dynamic lists
- **Form Handling**: Controlled components, validation
- **API Integration**: fetch, async/await, error handling
- **Accessibility**: ARIA roles, keyboard navigation
- **CSS Techniques**: Flexbox, Grid, animations
- **Performance**: Memoization, cleanup functions

## 🎮 Interactive Components

Many components include interactive features:
- Games: Tic-Tac-Toe, Connect Four, Wordle, Grid Lights
- Timers: Stopwatch, Digital Clock, Analog Clock, Traffic Light
- Data: Job Board, Data Table (API integration)
- Forms: Contact Form, Flight Booker, Auth Code Input
- UI Patterns: Accordion, Tabs, Modal, Carousel

## 📖 Usage Example

```tsx
import Accordion from './components/Accordion';

function App() {
  const sections = [
    { title: 'Section 1', content: 'Content 1' },
    { title: 'Section 2', content: 'Content 2' }
  ];

  return <Accordion sections={sections} />;
}
```

## 🎨 Styling

All components use a shared CSS file (`Components.css`) with:
- Consistent color scheme
- Smooth animations and transitions
- Responsive layouts
- Hover and active states
- Dark/light mode ready

## 🚧 Future Enhancements

- Add unit tests for all components
- Implement dark mode toggle
- Add more accessibility features
- Create Storybook documentation
- Add more game components
- Implement drag and drop features

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Built with ❤️ using React and TypeScript
