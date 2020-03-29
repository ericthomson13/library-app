import React from 'react';

import CitationItem from '../components/CitationItem';
import apaData from '../utility/apaData';

const APAFormat = () => {
  const list = apaData.map((citation) => (
    <CitationItem type={citation.type} item={[ ...citation.item ]} key={citation.id} />
  ));

  return (
    <>
      <h2 className="game-title">APA Citation</h2>
        {list}
      <h5>* Note that {'<'} and {'>'} are not to be included in the actual citation</h5>
    </>
  );
};

export default APAFormat;