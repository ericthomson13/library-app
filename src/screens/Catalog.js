/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import CatalogItem from '../components/CatalogItem';

const shuffle = (array) => {
	let currentIndex = array.length;
	let temporaryValue; let randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
const Catalog = () => {
  const catalogItems = [
    'PS3022 .K622 2019', 'QA890 .T92 2018', 'QA890 .T92 2019', 'Q690 .S12.2016', 'PQ3022 .N84 2019', 'PS3022 .K601 2019'
  ];
  const [shuffledItems, setShuffledItems] = useState(shuffle([...catalogItems]));

  const upButtonHandler = (index) => {

  };
  const downButtonHandler = (index) => {

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
          upHandler={upButtonHandler} 
          downHandler={downButtonHandler}
        />
      ))}
    </div>
    </>
  );
};

export default Catalog;