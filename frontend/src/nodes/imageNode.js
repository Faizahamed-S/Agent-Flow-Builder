// imageNode.js

import { useState } from 'react';
import { GenericNode } from './genericNode';

export const ImageNode = ({ id, data }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <GenericNode title="Image Input" outputs={[`${id}-image`]}>
      <>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
            <img 
            src={preview} 
            alt="preview" 
            style={{ width: '10%', height: '10%', marginTop: '8px', borderRadius: '4px' }}
            />
        )}
      </>
      </GenericNode>
  );
}
