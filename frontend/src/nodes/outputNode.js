// outputNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };
  
  return (
    <GenericNode title="Output" inputs={[`${id}-value`]}>
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
        value={outputType}
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
        <option value="File">Image</option>
      </select>
    </label>
  </div>
</GenericNode>
  )

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-value`}
  //     />
  //     <div>
  //       <span>Output</span>
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
  //         <select value={outputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">Image</option>
  //         </select>
  //       </label>
  //     </div>
  //   </div>
  // );
}
