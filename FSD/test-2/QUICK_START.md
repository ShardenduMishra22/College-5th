# Quick Start Guide

## Running the Application

```bash
# Install dependencies (if not already done)
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:5173
```

## Using the Component Showcase

1. **Sidebar Navigation**: Click any component name to view it
2. **Category Filter**: Use the category buttons (All/Beginner/Intermediate/Advanced) to filter components
3. **Active Highlight**: The currently selected component is highlighted in blue

## Component Categories

### 🟢 Beginner (10 components)
Perfect for learning React basics:
- State management with useState
- Simple event handling
- Basic form controls
- Layout patterns

**Recommended Start**: Accordion, Progress Bar, Temperature Converter

### 🟡 Intermediate (14 components)
More complex interactions:
- API integration
- Timers and intervals
- Game logic
- Multiple state interactions

**Recommended Start**: Data Table, Stopwatch, Tic-Tac-Toe

### 🔴 Advanced (7 components)
Advanced features:
- Complex state management
- Canvas/SVG manipulation
- Drag interactions
- Game algorithms

**Recommended Start**: Tabs, Auth Code Input, Wordle

## Quick Component Reference

### Most Interactive
- **Tic-Tac-Toe**: Play the classic game
- **Wordle**: Word guessing game (word: REACT)
- **Connect Four**: Drop pieces to connect four
- **Grid Lights**: Click to activate, auto-deactivate when full

### Data-Driven
- **Job Board**: Real jobs from Hacker News API
- **Data Table**: User data from JSONPlaceholder API

### Timers
- **Stopwatch**: Precise timing with milliseconds
- **Digital Clock**: Real-time HH:MM:SS
- **Analog Clock**: SVG clock with moving hands
- **Traffic Light**: Auto-cycling signals

### Forms
- **Contact Form**: Validation + API simulation
- **Flight Booker**: Date validation
- **Auth Code Input**: OTP/PIN entry
- **Mortgage Calculator**: Real-time calculations

### UI Patterns
- **Accordion**: Expandable sections
- **Tabs**: Tabbed content
- **Modal Dialog**: Overlay dialog
- **Carousel**: Image slider
- **Transfer List**: Dual-list selector

## Importing Components

```typescript
// Import individual component
import Accordion from './components/Accordion';

// Or use the index file
import { Accordion, TicTacToe, Wordle } from './components';
```

## Component Props Examples

### Accordion
```typescript
<Accordion sections={[
  { title: 'Title 1', content: 'Content 1' },
  { title: 'Title 2', content: 'Content 2' }
]} />
```

### Tweet
```typescript
<Tweet 
  author="John Doe"
  username="johndoe"
  content="Hello World!"
  timestamp="2h"
  avatar="https://example.com/avatar.jpg"
/>
```

### StarRating
```typescript
<StarRating maxStars={5} />
```

### ImageCarousel
```typescript
<ImageCarousel images={[
  'https://example.com/img1.jpg',
  'https://example.com/img2.jpg'
]} />
```

### FileExplorer
```typescript
<FileExplorer data={{
  name: 'root',
  type: 'folder',
  children: [
    { name: 'file.txt', type: 'file' }
  ]
}} />
```

### Tabs
```typescript
<Tabs tabs={[
  { label: 'Tab 1', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' }
]} />
```

### AuthCodeInput
```typescript
<AuthCodeInput 
  length={6} 
  onComplete={(code) => console.log(code)} 
/>
```

### SelectableCells
```typescript
<SelectableCells rows={5} cols={5} />
```

### ConnectFour
```typescript
<ConnectFour rows={6} cols={7} />
```

### GridLights
```typescript
<GridLights rows={3} cols={3} />
```

## Common Features

### All Components Include
- ✅ TypeScript types
- ✅ Proper state management
- ✅ Event handlers
- ✅ CSS styling
- ✅ Responsive design (where applicable)

### Accessibility Features
- ARIA roles and attributes (Tabs, Accordion, Modal)
- Keyboard navigation
- Focus management
- Semantic HTML

### Performance
- Proper cleanup in useEffect
- Efficient re-renders
- Optimized event handlers

## Styling

All components use `Components.css` for consistent styling. You can:
1. Modify `Components.css` to change global styles
2. Add component-specific classes
3. Use inline styles for dynamic styling

## Development Tips

### Adding New Components
1. Create component file in `src/components/`
2. Add TypeScript types for props
3. Import and add to App.tsx
4. Add styles to Components.css
5. Export from index.ts

### Debugging
- Use React DevTools for component inspection
- Check browser console for errors
- Verify props are correctly typed

### Testing Components
Each component can be tested individually by:
1. Selecting it in the sidebar
2. Interacting with all features
3. Checking responsive behavior (resize window)
4. Testing edge cases

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)

## Next Steps

1. **Explore Components**: Try each component in the showcase
2. **Read Code**: Check component implementations
3. **Modify Styles**: Customize Components.css
4. **Create Variations**: Build on existing components
5. **Add Features**: Extend with new functionality

## Getting Help

- Check `COMPONENTS.md` for detailed documentation
- Review `IMPLEMENTATION_SUMMARY.md` for technical details
- Examine component source code for implementation examples

---

**Happy Coding! 🚀**
