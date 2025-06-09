// textNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const SearchNode = ({ id, data }) => {
  const [currModel, setCurrModel] = useState(data?.model || '{{input}}');
  const [currQuery, setCurrQuery] = useState(data?.query || '{{input}}');

  const handleModelChange = (e) => {
    setCurrModel(e.target.value);
  };
  const handQueryChange = (e) => {
    setCurrQuery(e.target.value);
  };

  return (
    <GenericNode title="Search" inputs={[`${id}-search`]} outputs={[`${id}-output`]}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <label style={{ fontWeight: '500', fontSize: '13px', color: '#1a1a1a' }}>
      Embedding Model:
      <input
        type="text"
        value={currModel}
        onChange={handleModelChange}
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
      Search Query:
      <input
        type="text"
        value={currQuery}
        onChange={handQueryChange}
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
  </div>
</GenericNode>
  );

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Text</span>
  //     </div>
  //     <div>
  //       <label>
  //         Text:
  //         <input 
  //           type="text" 
  //           value={currText} 
  //           onChange={handleTextChange} 
  //         />
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-output`}
  //     />
  //   </div>
  // );
}
