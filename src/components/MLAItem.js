import React, { useState, useEffect, } from 'react';

import { shuffle, } from '../utility/functions';

const MLAItem = ({ type, item, }) => {
  const [shuffledItem, setShuffledItem] = useState(shuffle([ ...item ]));

  const displayedList = shuffledItem.map((string) => (
    <span>{string}</span>
  ))
  return (
    <>
      <h3>{type}</h3>
      <p>{displayedList}</p>
    </>
  );
};

export default MLAItem;