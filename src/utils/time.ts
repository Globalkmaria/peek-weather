import moment from 'moment-timezone';

export const getTimeWithDay = (timezone: string, timestamp: number) => {
  const time = timestamp ? moment(timestamp) : moment;
  return time.tz(timezone).format('ddd LT');
};

export const getDay = (timezone: string, timestamp?: number) => {
  const date = timestamp ? moment.unix(timestamp) : moment;
  return date.tz(timezone).format('ddd');
};
