'use client';

import { useState, useEffect } from 'react';

function useClock() {
  const [mount, setMount] = useState(true);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    if (mount) return;
    const timerID = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);

    return () => clearInterval(timerID);
  }, [mount]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setMount(false);
      setCurrentTime(Date.now());
    }, countTimeUntilNextTick());
    return () => clearTimeout(timerID);
  }, []);

  return currentTime;
}

export default useClock;

const countTimeUntilNextTick = () => {
  const currentTime = Date.now();
  const nextMinuteTime = Math.ceil(currentTime / 60000) * 60000;
  const timeLeftToNextMinute = nextMinuteTime - currentTime;

  return timeLeftToNextMinute;
};
