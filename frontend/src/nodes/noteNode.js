// noteNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const NoteNode = ({ id, data }) => {
  const [currNote, setCurrNote] = useState(data?.note || 'Start typing...');

  const handleNoteChange = (e) => {
    setCurrNote(e.target.value);
  };

  return (
    <GenericNode title="Note">
      <>
        <textarea 
            value={currNote} 
            onChange={handleNoteChange} 
            style={{ width: '100%', minHeight: '80px' }}
        />

      </>
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
