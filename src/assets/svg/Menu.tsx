import { Rect, Svg } from 'react-native-svg';

export const MenuIcon = () => {
  return (
    <Svg width='25' height='14' viewBox='0 0 25 14' fill='none'>
      <Rect x='12' width='13' height='3' rx='1.5' fill='#1B2A3E' />
      <Rect x='12' y='11' width='13' height='3' rx='1.5' fill='#1B2A3E' />
      <Rect x='5' y='5' width='20' height='3' rx='1.5' fill='#1DCC00' />
      <Rect width='3' height='3' rx='1.5' fill='#1B2A3E' />
      <Rect y='11' width='3' height='3' rx='1.5' fill='#1B2A3E' />
      <Rect y='5' width='3' height='3' rx='1.5' fill='#1DCC00' />
    </Svg>
  );
};
