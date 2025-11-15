import React from 'react';

// Simple Rating component used by the Questionnaire page.
// Props: value (number), onChange (fn), max (number)
export const Rating = ({ value = 0, onChange = () => {}, max = 5 }) => {
  const handleClick = (i) => {
    if (onChange) onChange(i);
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: max }).map((_, idx) => {
        const i = idx + 1;
        const filled = i <= value;
        return (
          <button
            key={i}
            type="button"
            aria-label={`Rate ${i}`}
            onClick={() => handleClick(i)}
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150 mr-2 ${filled ? 'bg-accent text-white' : 'bg-muted/20 text-muted-foreground'}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .587l3.668 7.431L23.4 9.748l-5.6 5.46L18.834 24 12 20.201 5.166 24l1.034-8.792L.6 9.748l7.732-1.73L12 .587z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
