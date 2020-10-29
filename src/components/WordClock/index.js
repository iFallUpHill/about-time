import React, { useState, useEffect } from 'react';
import getTimeApproximation from '../../utils/time';

const WordClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time])

  return (
    <>
      { getTimeApproximation(time, 'rough') }
      <br />
      { getTimeApproximation(time, 'conservative') }
    </>
  )
}

export default WordClock;
