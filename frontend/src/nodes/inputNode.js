// inputNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <GenericNode title="Input" outputs={[`${id}-value`]}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label style={{ fontWeight: '500', fontSize: '13px', color: '#1a1a1a' }}>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          style={{
            width: '92%',
            padding: '4px 6px',
            marginTop: '4px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '13px',
          }}
        />
      </label>
  
      <label style={{ fontWeight: '500', fontSize: '13px', color: '#1a1a1a' }}>
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          style={{
            width: '100%',
            padding: '4px 6px',
            marginTop: '4px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '13px',
            backgroundColor: '#fff'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  </GenericNode>
  );

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Input</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         <input 
  //           type="text" 
  //           value={currName} 
  //           onChange={handleNameChange} 
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={inputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">File</option>
  //         </select>
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-value`}
  //     />
  //   </div>
  // );
}
