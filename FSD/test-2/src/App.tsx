import { useState } from 'react';
import './components/Components.css';

// Import all components
import Accordion from './components/Accordion';
import ContactForm from './components/ContactForm';
import HolyGrail from './components/HolyGrail';
import ProgressBars from './components/ProgressBars';
import MortgageCalculator from './components/MortgageCalculator';
import FlightBooker from './components/FlightBooker';
import GenerateTable from './components/GenerateTable';
import ProgressBar from './components/ProgressBar';
import TemperatureConverter from './components/TemperatureConverter';
import Tweet from './components/Tweet';
import DataTable from './components/DataTable';
import DiceRoller from './components/DiceRoller';
import FileExplorer from './components/FileExplorer';
import LikeButton from './components/LikeButton';
import ModalDialog from './components/ModalDialog';
import StarRating from './components/StarRating';
import TrafficLight from './components/TrafficLight';
import DigitalClock from './components/DigitalClock';
import TicTacToe from './components/TicTacToe';
import ImageCarousel from './components/ImageCarousel';
import JobBoard from './components/JobBoard';
import Stopwatch from './components/Stopwatch';
import TransferList from './components/TransferList';
import Tabs from './components/Tabs';
import AuthCodeInput from './components/AuthCodeInput';
import AnalogClock from './components/AnalogClock';
import SelectableCells from './components/SelectableCells';
import Wordle from './components/Wordle';
import ConnectFour from './components/ConnectFour';
import GridLights from './components/GridLights';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('accordion');

  const components = [
    // Beginner Components
    { id: 'accordion', name: 'Accordion', category: 'Beginner' },
    { id: 'contact-form', name: 'Contact Form', category: 'Beginner' },
    { id: 'holy-grail', name: 'Holy Grail Layout', category: 'Beginner' },
    { id: 'progress-bars', name: 'Progress Bars', category: 'Beginner' },
    { id: 'mortgage-calculator', name: 'Mortgage Calculator', category: 'Beginner' },
    { id: 'flight-booker', name: 'Flight Booker', category: 'Beginner' },
    { id: 'generate-table', name: 'Generate Table', category: 'Beginner' },
    { id: 'progress-bar', name: 'Progress Bar', category: 'Beginner' },
    { id: 'temperature-converter', name: 'Temperature Converter', category: 'Beginner' },
    { id: 'tweet', name: 'Tweet Component', category: 'Beginner' },
    
    // Intermediate Components
    { id: 'data-table', name: 'Data Table', category: 'Intermediate' },
    { id: 'dice-roller', name: 'Dice Roller', category: 'Intermediate' },
    { id: 'file-explorer', name: 'File Explorer', category: 'Intermediate' },
    { id: 'like-button', name: 'Like Button', category: 'Intermediate' },
    { id: 'modal-dialog', name: 'Modal Dialog', category: 'Intermediate' },
    { id: 'star-rating', name: 'Star Rating', category: 'Intermediate' },
    { id: 'traffic-light', name: 'Traffic Light', category: 'Intermediate' },
    { id: 'digital-clock', name: 'Digital Clock', category: 'Intermediate' },
    { id: 'tic-tac-toe', name: 'Tic-Tac-Toe', category: 'Intermediate' },
    { id: 'image-carousel', name: 'Image Carousel', category: 'Intermediate' },
    { id: 'job-board', name: 'Job Board', category: 'Intermediate' },
    { id: 'stopwatch', name: 'Stopwatch', category: 'Intermediate' },
    { id: 'transfer-list', name: 'Transfer List', category: 'Intermediate' },
    
    // Advanced Components
    { id: 'tabs', name: 'Tabs', category: 'Advanced' },
    { id: 'auth-code-input', name: 'Auth Code Input', category: 'Advanced' },
    { id: 'analog-clock', name: 'Analog Clock', category: 'Advanced' },
    { id: 'selectable-cells', name: 'Selectable Cells', category: 'Advanced' },
    { id: 'wordle', name: 'Wordle', category: 'Advanced' },
    { id: 'connect-four', name: 'Connect Four', category: 'Advanced' },
    { id: 'grid-lights', name: 'Grid Lights', category: 'Advanced' },
  ];

  const renderComponent = () => {
    const accordionData = [
      { title: 'Section 1', content: 'Content for section 1' },
      { title: 'Section 2', content: 'Content for section 2' },
      { title: 'Section 3', content: 'Content for section 3' }
    ];

    const fileSystemData = {
      name: 'root',
      type: 'folder' as const,
      children: [
        {
          name: 'src',
          type: 'folder' as const,
          children: [
            { name: 'index.js', type: 'file' as const },
            { name: 'App.js', type: 'file' as const }
          ]
        },
        { name: 'package.json', type: 'file' as const }
      ]
    };

    const carouselImages = [
      'https://via.placeholder.com/600x400/FF6B6B/ffffff?text=Slide+1',
      'https://via.placeholder.com/600x400/4ECDC4/ffffff?text=Slide+2',
      'https://via.placeholder.com/600x400/45B7D1/ffffff?text=Slide+3'
    ];

    const tabsData = [
      { label: 'Tab 1', content: 'Content for tab 1' },
      { label: 'Tab 2', content: 'Content for tab 2' },
      { label: 'Tab 3', content: 'Content for tab 3' }
    ];

    switch (selectedComponent) {
      case 'accordion':
        return <Accordion sections={accordionData} />;
      case 'contact-form':
        return <ContactForm />;
      case 'holy-grail':
        return <HolyGrail />;
      case 'progress-bars':
        return <ProgressBars />;
      case 'mortgage-calculator':
        return <MortgageCalculator />;
      case 'flight-booker':
        return <FlightBooker />;
      case 'generate-table':
        return <GenerateTable />;
      case 'progress-bar':
        return <ProgressBar />;
      case 'temperature-converter':
        return <TemperatureConverter />;
      case 'tweet':
        return <Tweet 
          author="John Doe" 
          username="johndoe" 
          content="This is an example tweet component built with React!" 
          timestamp="2h" 
          avatar="https://via.placeholder.com/50"
        />;
      case 'data-table':
        return <DataTable />;
      case 'dice-roller':
        return <DiceRoller />;
      case 'file-explorer':
        return <FileExplorer data={fileSystemData} />;
      case 'like-button':
        return <LikeButton />;
      case 'modal-dialog':
        return <ModalDialog />;
      case 'star-rating':
        return <StarRating maxStars={5} />;
      case 'traffic-light':
        return <TrafficLight />;
      case 'digital-clock':
        return <DigitalClock />;
      case 'tic-tac-toe':
        return <TicTacToe />;
      case 'image-carousel':
        return <ImageCarousel images={carouselImages} />;
      case 'job-board':
        return <JobBoard />;
      case 'stopwatch':
        return <Stopwatch />;
      case 'transfer-list':
        return <TransferList />;
      case 'tabs':
        return <Tabs tabs={tabsData} />;
      case 'auth-code-input':
        return <AuthCodeInput length={6} onComplete={(code) => alert(`Code: ${code}`)} />;
      case 'analog-clock':
        return <AnalogClock />;
      case 'selectable-cells':
        return <SelectableCells rows={5} cols={5} />;
      case 'wordle':
        return <Wordle />;
      case 'connect-four':
        return <ConnectFour />;
      case 'grid-lights':
        return <GridLights rows={3} cols={3} />;
      default:
        return <div>Select a component</div>;
    }
  };

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredComponents = selectedCategory === 'All' 
    ? components 
    : components.filter(c => c.category === selectedCategory);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ 
        width: '280px', 
        backgroundColor: '#f5f5f5', 
        padding: '20px',
        borderRight: '1px solid #ddd',
        overflowY: 'auto'
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
          React Components
        </h1>
        
        {/* Category Filter */}
        <div style={{ marginBottom: '20px' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginBottom: '5px',
                backgroundColor: selectedCategory === category ? '#2196f3' : 'white',
                color: selectedCategory === category ? 'white' : '#333',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Component List */}
        <div>
          {filteredComponents.map(component => (
            <button
              key={component.id}
              onClick={() => setSelectedComponent(component.id)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: selectedComponent === component.id ? '#2196f3' : 'white',
                color: selectedComponent === component.id ? 'white' : '#333',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px'
              }}
            >
              {component.name}
              <span style={{ 
                fontSize: '11px', 
                marginLeft: '8px',
                opacity: 0.7
              }}>
                ({component.category})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default App;
