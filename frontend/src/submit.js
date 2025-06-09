// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
  });

export const SubmitButton = () => {
    const {
          nodes,
          edges,
        } = useStore(selector, shallow);

        const handleSubmit = async () => {
            console.log(nodes, edges);
            try {
              const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
              });
              const result = await response.json();
              //console.log(result)
              alert(`Pipeline Stats:
                    - Nodes: ${result.num_nodes}
                    - Edges: ${result.num_edges}
                    - Is DAG: ${result.is_dag ? 'Yes' : 'No'}
              `);
            } catch (err) {
              alert('Error!');
            }
          };
        
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button
                type="submit"
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#6f6ee8',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '8px',
                    marginTop:'20px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5957d9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6f6ee8'} >
                Submit Pipeline
            </button>
        </div>
    );
}
