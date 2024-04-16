// Item.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { itemId } = useParams();

  // Dummy data for demonstration
  const item = { id: itemId, name: `Item ${itemId}`, description: `Description of Item ${itemId}` };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;
