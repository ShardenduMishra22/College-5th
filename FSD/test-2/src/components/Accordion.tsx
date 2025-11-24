import { useState } from 'react';

interface Section {
  title: string;
  content: string;
}

interface AccordionProps {
  sections: Section[];
}

export default function Accordion({ sections }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleSection(index)}
            aria-expanded={openIndex === index}
          >
            <span>{section.title}</span>
            <span className="icon">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
