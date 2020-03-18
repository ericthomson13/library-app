/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import CatalogItem from '../components/CatalogItem';
import { shuffle } from '../utility/functions';

const Catalog = () => {
  const catalogItems = [
    'PS3022 .K622 2019', 'QA890 .T92 2018', 'QA890 .T92 2019', 'Q690 .S12.2016', 'PQ3022 .N84 2019', 'PS3022 .K601 2019'
  ];
  const [shuffledItems, setShuffledItems] = useState(shuffle([...catalogItems]));

  const upHandler = (i) => {
    if (i === 0) return;
    const newArr = [...shuffledItems];
    const temp = newArr[i];
    newArr[i] = newArr[i - 1];
    newArr[i - 1] = temp;
    setShuffledItems(newArr);
  };
  const downHandler = (i) => {
    if (i === shuffledItems.length) return;
    const newArr = [...shuffledItems];
    const temp = newArr[i];
    newArr[i] = newArr[i + 1];
    newArr[i + 1] = temp;
    setShuffledItems(newArr);
  };

  return (
    <>
    <h2>Call Number Sorter</h2>
    <div>
      {shuffledItems.map((item, i) => (
        <CatalogItem 
          key={i} 
          name={item} 
          index={i} 
          upHandler={upHandler} 
          downHandler={downHandler}
        />
      ))}
    </div>
    </>
  );
};

export default Catalog;