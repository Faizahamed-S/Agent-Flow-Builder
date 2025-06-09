import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='search' label='Search' />
                <DraggableNode type='email' label='Email Node' />
                <DraggableNode type='mathOperation' label='Math Operation Node' />
                <DraggableNode type='note' label='Note Node' />
                <DraggableNode type='image' label='Image Node' />
            </div>
        </div>
    );
};
