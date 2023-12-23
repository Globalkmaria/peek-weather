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

const WEATHER_ICON: { [key in Weathers[number]]: IconType } = {
  Thunderstorm: WiLightning,
  Drizzle: WiShowers,
  Rain: WiRain,
  Snow: WiSnow,
  Mist: WiDust,
  Clear: WiDaySunny,
  Clouds: WiCloud,
};

const getWeatherIcon = (iconId: number): IconType => {
  if (200 <= iconId && iconId <= 232) return WEATHER_ICON.Thunderstorm;
  if (300 <= iconId && iconId <= 321) return WEATHER_ICON.Drizzle;
  if (500 <= iconId && iconId <= 531) return WEATHER_ICON.Rain;
  if (600 <= iconId && iconId <= 622) return WEATHER_ICON.Snow;
  if (701 <= iconId && iconId <= 781) return WEATHER_ICON.Mist;
  if (801 <= iconId && iconId <= 804) return WEATHER_ICON.Clouds;

  return WEATHER_ICON.Clear;
};
