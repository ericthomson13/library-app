import React, { useState, useRef } from 'react';

import CatalogItem from '../components/CatalogItem';

const shuffle = (array) => {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
const Catalog = (props) => {
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