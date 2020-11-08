import React, { useState, useEffect } from 'react';
import getTimeApproximation from '../../utils/time';
import getDateText from '../../utils/date';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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

const timeVariants = {
  hidden: {
    position: 'absolute',
    opacity: 0,
    y: 48,
  },
  visible: {
    position: 'relative',
    opacity: 1,
    y: 0,
  },
  exit: {
    position: 'absolute',
    opacity: 0, 
    y: -48,
  }
}

const dateVariants = {
  hidden: {
    position: 'absolute',
    opacity: 0,
    y: 32,
  },
  visible: {
    position: 'relative',
    opacity: 1,
    y: 0,
  },
  exit: {
    position: 'absolute',
    opacity: 0, 
    y: -32,
  }
}

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
      <TimeText>
        <AnimatePresence>
          { getTimeApproximation(dateTime, rounding).split(/(\s+)/).map( (word, index) => {
            return (
              <motion.span
                key={`${word}-${index}`}
                style={{ display: 'inline-block', lineHeight: '1.5', whiteSpace: 'pre' }}
                variants={timeVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{
                  duration: 0.75,
                  ease: [0, 0.05, 0.36, 1.0]
                }}
              >
                {word}
              </motion.span>
            )
            }) 
          }
        </AnimatePresence>
      </TimeText>
      <DateText>
        <AnimatePresence>
          <motion.span
            key={getDateText(dateTime, shortDate)}
            style={{ display: 'inline-block', lineHeight: '1.5', whiteSpace: 'pre' }}
            variants={dateVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: 0.75,
              ease: [0, 0.05, 0.36, 1.0]
            }}
          >
            {getDateText(dateTime, shortDate)}
          </motion.span>
        </AnimatePresence>
      </DateText>
    </Container>
  )
}

export default WordClock;
