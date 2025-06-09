import React from 'react';
import { useState } from 'react';
import { GenericNode } from './genericNode';

export const MathOperationNode = ({ id, data }) => {

    const [currOperation, setCurrOperation] = useState(data?.operation || '+');
    
    const handleOperationChange = (e) => {
        setCurrOperation(e.target.value);
    };

  return (
    <GenericNode title="Math Operation Node" inputs={[`${id}-a`, `${id}-b`]} outputs={[`${id}-result`]}>
      <input 
        style={{ width: '100%' }}
        value={currOperation}
        onChange={handleOperationChange} 
    />
    </GenericNode>
  );
};
