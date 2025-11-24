import { useState, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default function ModalDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
