// textNode.js

import { useEffect, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { GenericNode } from './genericNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textRef = useRef(null);
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const matches = [...currText.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g)];
    const uniqueVars = [...new Set(matches.map(match => match[1]))];
    setVariables(uniqueVars);
  }, [currText]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <GenericNode title="Text" outputs={[`${id}-output`]}>
      <>
        <textarea
          ref={textRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '90%',
            resize: 'none',
            overflow: 'hidden',
            fontSize: '14px',
            padding: '6px',
            borderRadius: '6px',
            minHeight: '40px',
          }}
        />
        {variables.map((v, index) => (
          <Handle
            key={v}
            type="target"
            position={Position.Left}
            id={v}
            style={{
              top: `${((index + 1) * 100) / (variables.length + 1)}%`,
              background: '#007bff',
              border: '1px solid white',
            }}
          />
        ))}
      </>
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
