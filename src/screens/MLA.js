import React from 'react';

import MLAItem from '../components/MLAItem';

import mlaData from '../utility/mlaData';

const MLAFormat = () => {
  const list = mlaData.map((citation) => (
   <MLAItem type={citation.type} item={[ ...citation.items ]}/>
  ))
  return (
    <>
    <h2 className="game-title">MLA Format</h2>
    {list}
    </>
  );
};

export default MLAFormat;