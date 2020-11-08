const hourAsWord = {
  1: 'one', 
  2: 'two', 
  3: 'three', 
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight', 
  9: 'nine', 
  10: 'ten', 
  11: 'eleven', 
  12: 'twelve'
};

const minuteAsWord = {
  5: 'five',
  10: 'ten',
  15: 'fifteen',
  20: 'twenty',
  25: 'twenty-five',
  30: 'half',
}

const roughRound = (dateTime) => {
  const seconds = dateTime.getSeconds();
  const minute = dateTime.getMinutes();
  const secondsPast = minute * 60 + seconds;
  const hour = dateTime.getHours() % 12 || 12;
  const hourWord = hourAsWord[hour];
  let message = '';

  if (secondsPast < (2*60 + 30)) {
    message = `${hourWord} o'clock`
  } else if (secondsPast >= (2*60 + 30) && secondsPast < (7*60 + 30)) {
    message = `${minuteAsWord[5]} past ${hourWord}`;
  } else if (secondsPast >= (7*60 + 30) && secondsPast < (12*60 + 30)) {
    message = `${minuteAsWord[10]} past ${hourWord}`;
  } else if (secondsPast >= (12*60 + 30) && secondsPast < (17*60 + 30)) {
    message = `${minuteAsWord[15]} past ${hourWord}`;
  } else if (secondsPast >= (17*60 + 30) && secondsPast < (22*60 + 30)) {
    message = `${minuteAsWord[20]} past ${hourWord}`;
  } else if (secondsPast >= (22*60 + 30) && secondsPast < (27*60 + 30)) {
    message = `${minuteAsWord[25]} past ${hourWord}`;
  } else if (secondsPast >= (27*60 + 30) && secondsPast < (32*60 + 30)) {
    message = `${minuteAsWord[30]} past ${hourWord}`;
  } else if (secondsPast >= (32*60 + 30) && secondsPast < (37*60 + 30)) {
    message = `${minuteAsWord[25]} to ${hourWord}`;
  } else if (secondsPast >= (37*60 + 30) && secondsPast < (42*60 + 30)) {
    message = `${minuteAsWord[20]} to ${hourWord}`;
  } else if (secondsPast >= (42*60 + 30) && secondsPast < (47*60 + 30)) {
    message = `${minuteAsWord[15]} to ${hourWord}`;
  } else if (secondsPast >= (47*60 + 30) && secondsPast < (52*60 + 30)) {
    message = `${minuteAsWord[10]} to ${hourWord}`;
  } else if (secondsPast >= (52*60 + 30) && secondsPast < (57*60 + 30)) {
    message = `${minuteAsWord[5]} to ${hourWord}`;
  } else if (secondsPast >= (57*60 + 30)) {
    message = `${hourAsWord[hour + 1]} o'clock`;
  }
  return message;
}


const conservativeRound = (dateTime) => {
  const seconds = dateTime.getSeconds();
  const minute = dateTime.getMinutes();
  const secondsPast = minute * 60 + seconds;
  const hour = dateTime.getHours() % 12 || 12;
  const hourWord = hourAsWord[hour];
  let message = '';

  if (secondsPast < (5*60)) {
    message = `${minuteAsWord[5]} past ${hourWord}`;
  } else if (secondsPast >= (5*60) && secondsPast < (10*60)) {
    message = `${minuteAsWord[10]} past ${hourWord}`;
  } else if (secondsPast >= (10*60) && secondsPast < (15*60)) {
    message = `${minuteAsWord[15]} past ${hourWord}`;
  } else if (secondsPast >= (15*60) && secondsPast < (20*60)) {
    message = `${minuteAsWord[20]} past ${hourWord}`;
  } else if (secondsPast >= (20*60) && secondsPast < (25*60)) {
    message = `${minuteAsWord[25]} past ${hourWord}`;
  } else if (secondsPast >= (25*60) && secondsPast < (30*60)) {
    message = `${minuteAsWord[30]} past ${hourWord}`;
  } else if (secondsPast >= (30*60) && secondsPast < (35*60)) {
    message = `${minuteAsWord[25]} past ${hourWord}`;
  } else if (secondsPast >= (35*60) && secondsPast < (40*60)) {
    message = `${minuteAsWord[20]} to ${hourWord}`;
  } else if (secondsPast >= (40*60) && secondsPast < (45*60)) {
    message = `${minuteAsWord[15]} to ${hourWord}`;
  } else if (secondsPast >= (45*60) && secondsPast < (50*60)) {
    message = `${minuteAsWord[10]} to ${hourWord}`;
  } else if (secondsPast >= (50*60) && secondsPast < (55*60)) {
    message = `${minuteAsWord[5]} to ${hourWord}`;
  } else if (secondsPast >= (55*60)) {
    message = `${hourAsWord[hour + 1]} o'clock`;
  }
  return message;
}

const getTimeApproximation = (dateTime, rounding = 'conservative') => {
  return (rounding === 'rough' ? roughRound(dateTime): conservativeRound(dateTime));
}

export default getTimeApproximation;
