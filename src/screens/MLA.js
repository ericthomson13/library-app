import React from 'react';

import CitationItem from '../components/CitationItem';

import mlaData from '../utility/mlaData';

const MLAFormat = () => {
  const list = mlaData.map((citation) => (
   <CitationItem type={citation.type} item={[ ...citation.items ]} key={citation.id} />
  ))
  return (
    <>
    <h2 className="game-title">MLA Format</h2>
      {list}
    <h5>* Note that {'<'} and {'>'} are not to be included in the actual citation</h5>
    </>
  );
};

export default MLAFormat;