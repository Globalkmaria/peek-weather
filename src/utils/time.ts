import moment from 'moment-timezone';

export const getTimeWithDay = (timezone: string, timestamp?: number) => {
  const time = timestamp ? moment.unix(timestamp) : moment;
  return time.tz(timezone).format('LT ddd');
};

export const getDay = (timezone: string, timestamp?: number) => {
  const date = timestamp ? moment.unix(timestamp) : moment;
  return date.tz(timezone).format('ddd');
};
