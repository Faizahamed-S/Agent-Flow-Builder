import React from 'react';
import { Handle, Position } from 'reactflow';
export const GenericNode = ({ 
  title, 
  inputs = [], 
  outputs = [], 
  children 
}) => {
  return (
    <div
      style={{
        border: '1px solid #b5ccf1',
        borderRadius: '10px',
        backgroundColor: '#f4f7ff',
        minWidth: '200px',
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 4px 12px rgba(175, 200, 255, 0.2)',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 12px',
          fontWeight: '600',
          fontSize: '14px',
          color: '#1a1a1a',
          backgroundColor: '#e8eaff', 
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          textAlign: 'center',
        }}
      >
        {title}
      </div>

      <div
        style={{
          height: '1px',
          backgroundColor: '#d0d8e8',
          margin: '0 12px',
        }}
      />

      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            background: '#6f6ee8',
            border: '2px solid white',
            width: '10px',
            height: '10px',
          }}
        />
      ))}

      <div style={{ padding: '12px' }}>
        {children}
      </div>

      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: '#6f6ee8',
            border: '2px solid white',
            width: '10px',
            height: '10px',
          }}
        />
      ))}
    </div>
  );
};