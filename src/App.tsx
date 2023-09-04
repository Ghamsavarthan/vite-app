import React from 'react';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';

function App() {
  const handlePrimaryClick = () => {
    alert('Primary Button clicked!');
  };

  const handleSecondaryClick = () => {
    alert('Secondary Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <PrimaryButton label="Primary Button" onClick={handlePrimaryClick} />
        <SecondaryButton label="Secondary Button 1" onClick={handleSecondaryClick} />
        <SecondaryButton label="Secondary Button 2" onClick={handleSecondaryClick} />
        <SecondaryButton label="Secondary Button 3" onClick={handleSecondaryClick} />
        <SecondaryButton label="Secondary Button 4" onClick={handleSecondaryClick} />
      </div>
    </div>
  );
}

export default App;
