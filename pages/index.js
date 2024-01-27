import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const DualTimeClock = () => {
  const [localTime, setLocalTime] = useState(moment());
  const [hkTime, setHKTime] = useState(moment().tz('Asia/Hong_Kong'));

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(moment());
      setHKTime(moment().tz('Asia/Hong_Kong'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Local Time: {localTime.format('h:mm:ss A')}</h2>
      <h2>Hong Kong Time: {hkTime.format('h:mm:ss A')}</h2>
    </div>
  );
};

export default DualTimeClock;
