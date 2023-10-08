import React, { useEffect } from 'react';

const StatCounter = ({ targetValue, label }) => {
  useEffect(() => {
    const counterElement = document.getElementById(`counter-${label.toLowerCase()}`);
    animateCounter(counterElement, targetValue);
  }, [targetValue, label]);

  const animateCounter = (element, targetValue) => {
    let currentValue = 0;
    const duration = 5000; 
    const increment = targetValue / (duration / 16); 

    function updateCounter() {
      if (currentValue < targetValue) {
        currentValue += increment;
        element.textContent = Math.round(currentValue);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = targetValue;
      }
    }

    updateCounter();
  };

  return (
    <h2 id={`counter-${label.toLowerCase()}`}>{0}</h2>
  );
};

export default StatCounter;
