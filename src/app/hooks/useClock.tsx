'use client';

import { useState, useEffect } from 'react';

function useClock() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);

    return () => clearInterval(timerID);
  }, []);

  return currentTime;
}

export default useClock;
