/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, } from 'react';

import { shuffle, } from '../utility/functions';

const MLAItem = ({ type, item, }) => {
  const [shuffledItem, setShuffledItem] = useState(shuffle([ ...item ]));
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    for (let i = 0; i < shuffledItem.length ; i++) {
      if (shuffledItem[i] !== item[i]) return;
    }
    setWinner(true);
  }, [shuffledItem, item]);

  const upHandler = (i) => {
    if (i === 0) return;
    const newArr = [...shuffledItem];
    const temp = newArr[i];
    newArr[i] = newArr[i - 1];
    newArr[i - 1] = temp;
    setShuffledItem(newArr);
  };

  const downHandler = (i) => {
    if (i === shuffledItem.length) return;
    const newArr = [...shuffledItem];
    const temp = newArr[i];
    newArr[i] = newArr[i + 1];
    newArr[i + 1] = temp;
    setShuffledItem(newArr);
  };

  return (
    <>
      <h3>{type}</h3>
      <p>{
        shuffledItem.map((string, i) => (
          <>
            <button type="button" onClick={() => upHandler(i)}>{'<'}</button>
            <span>{string}</span>
            <button type="button" onClick={() => downHandler(i)}>{'>'}</button>
          </>
        ))
      }</p>
    </>
  );
};

export default MLAItem;