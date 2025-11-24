import { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

interface ListBoxProps {
  items: Item[];
  selected: number[];
  onToggle: (id: number, side: 'left' | 'right') => void;
  side: 'left' | 'right';
}

const ListBox = ({ items, selected, onToggle, side }: ListBoxProps) => (
  <div className="list-box">
    {items.map(item => (
      <div
        key={item.id}
        className={`list-item ${selected.includes(item.id) ? 'selected' : ''}`}
        onClick={() => onToggle(item.id, side)}
      >
        {item.name}
      </div>
    ))}
  </div>
);

export default function TransferList() {
  const [leftItems, setLeftItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' }
  ]);
  const [rightItems, setRightItems] = useState<Item[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number[]>([]);
  const [selectedRight, setSelectedRight] = useState<number[]>([]);

  const moveToRight = () => {
    const itemsToMove = leftItems.filter(item =>
      selectedLeft.includes(item.id)
    );
    setRightItems([...rightItems, ...itemsToMove]);
    setLeftItems(leftItems.filter(item => !selectedLeft.includes(item.id)));
    setSelectedLeft([]);
  };

  const moveToLeft = () => {
    const itemsToMove = rightItems.filter(item =>
      selectedRight.includes(item.id)
    );
    setLeftItems([...leftItems, ...itemsToMove]);
    setRightItems(rightItems.filter(item => !selectedRight.includes(item.id)));
    setSelectedRight([]);
  };

  const toggleSelection = (id: number, side: 'left' | 'right') => {
    if (side === 'left') {
      setSelectedLeft(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setSelectedRight(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    }
  };

  return (
    <div className="transfer-list">
      <h2>Transfer List</h2>
      
      <div className="transfer-container">
        <ListBox
          items={leftItems}
          selected={selectedLeft}
          onToggle={toggleSelection}
          side="left"
        />

        <div className="transfer-controls">
          <button onClick={moveToRight} disabled={selectedLeft.length === 0}>
            →
          </button>
          <button onClick={moveToLeft} disabled={selectedRight.length === 0}>
            ←
          </button>
        </div>

        <ListBox
          items={rightItems}
          selected={selectedRight}
          onToggle={toggleSelection}
          side="right"
        />
      </div>
    </div>
  );
}
