// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        padding: '8px 14px',
        fontSize: '13px',
        fontWeight: '500',
        color: '#fff',
        borderRadius: '6px',
        backgroundColor: '#6f6ee8',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.2s ease',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#5957d9'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#6f6ee8'}
      draggable
    >
      {label}
    </div>
  );
};