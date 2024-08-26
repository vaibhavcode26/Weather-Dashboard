import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';


function ColorChanger() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
     
      <button onClick={toggleTheme}
      className= " m-4 border-4 p-3 bg-gray-400 rounded-lg font-bold"
      >

        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme

      </button>
    </div>
  );
}

export default ColorChanger;