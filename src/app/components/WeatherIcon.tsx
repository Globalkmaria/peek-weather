import { IconType } from 'react-icons';
import { WiLightning, WiShowers, WiRain, WiSnow, WiDust, WiDaySunny, WiCloud } from 'react-icons/wi';

type Weathers = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Clear', 'Clouds'];

interface Props {
  iconId: number;
}
function WeatherIcon({ iconId }: Props) {
  const Icon = getWeatherIcon(iconId);
  return <Icon className='text-8xl' />;
}

export default WeatherIcon;

const weatherIcon: { [key in Weathers[number]]: IconType } = {
  Thunderstorm: WiLightning,
  Drizzle: WiShowers,
  Rain: WiRain,
  Snow: WiSnow,
  Mist: WiDust,
  Clear: WiDaySunny,
  Clouds: WiCloud,
};

const getWeatherIcon = (iconId: number): IconType => {
  if (200 <= iconId && iconId <= 232) return weatherIcon.Thunderstorm;
  if (300 <= iconId && iconId <= 321) return weatherIcon.Drizzle;
  if (500 <= iconId && iconId <= 531) return weatherIcon.Rain;
  if (600 <= iconId && iconId <= 622) return weatherIcon.Snow;
  if (701 <= iconId && iconId <= 781) return weatherIcon.Mist;
  if (801 <= iconId && iconId <= 804) return weatherIcon.Clouds;

  return weatherIcon.Clear;
};
