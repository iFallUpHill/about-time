import React, { useState, useEffect } from 'react';
import getTimeApproximation from '../../utils/time';
import getDateText from '../../utils/date';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  text-align: center;
`

const TimeText = styled.h1`
  font-size: 3em;
  margin: 0;
  color: ${({ theme }) => theme.text};
`

const DateText = styled.h2`
  font-size: 2em;
  margin: -0.5em 0 0;
  color: ${({ theme }) => theme.text};
`

const WordClock = ({ rounding = 'conservative', shortDate = false }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dateTime])

  return (
    <Container>
      <TimeText>{ getTimeApproximation(dateTime, rounding) }</TimeText>
      <DateText>{ getDateText(dateTime, shortDate) }</DateText>
    </Container>
  )
}

export default WordClock;
