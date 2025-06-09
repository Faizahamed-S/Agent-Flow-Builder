import React from 'react';
import { useState } from 'react';
import { GenericNode } from './genericNode';

export const EmailNode = ({ id, data }) => {

    const [currSubject, setCurrSubject] = useState(data?.subject || '{{subject}}');
    
    const handleSubjectChange = (e) => {
        setCurrSubject(e.target.value);
    };

  return (
    <GenericNode title="Email Node" inputs={[`${id}-to`, `${id}-body`]} outputs={[]}>
      <input 
        style={{ width: '92%' }}
        value={currSubject}
        onChange={handleSubjectChange} 
    />
    </GenericNode>
  );
};
