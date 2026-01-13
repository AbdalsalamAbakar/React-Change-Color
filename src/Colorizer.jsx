import { useState } from 'react';
import './app.css'

const Colorizer = () => {
  // Initial state (standard 6-character hex)
  const [color, setColor] = useState("#382e2e");

  const getRandomColor = () => {
    // Math.random can produce short strings. 
    // .padStart(6, '0') ensures we always have 6 digits.
    const randomHex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0'); 
    
    return `#${randomHex}`;
  }

  const changeColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  return (
    <div className="colorizer">
      {/* Both the style and the text now use the exact same 'color' variable */}
      <div className="box" style={{ backgroundColor: color }}>
        {color} 
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Colorizer;