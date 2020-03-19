/* eslint-disable react/prop-types */
import React from 'react';

const CatalogItem = ({ name, index, upHandler, downHandler }) => {

  return (
    <div className="catalog-item">
      <div className="item-name">{name}</div>
      <button type="button" className="up-button" onClick={() => upHandler(index)}>Move Up</button>
      <button type="button" className="down-button" onClick={() => downHandler(index)}>Move Down</button>
    </div>
  );
};

export default CatalogItem;
