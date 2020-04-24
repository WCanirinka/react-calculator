import React, { useState } from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const [buttons] = useState([
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]);

  const [groupIndices] = useState([1, 2, 3, 4]);

  const [operationCharacters] = useState(['÷', 'X', '-', '+', '=']);

  return (
    <div className="button-panel">
      {buttons.map((group, outerIndex) => (
        <div className="btn-group" key={groupIndices[outerIndex]}>
          {group.map(character => {
            if (operationCharacters.includes(character)) {
              return <Button key={character} name={character} />;
            } if (character === '0') {
              return <Button key={character} name={character} color wide />;
            }
            return <Button key={character} name={character} color />;
          })}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
