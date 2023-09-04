// src/components/SecondaryButton.tsx

import React from 'react';

interface SecondaryButtonProps {
  label: string;
  onClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mx-1"
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
