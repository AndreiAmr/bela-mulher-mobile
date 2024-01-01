import { Path, Svg } from 'react-native-svg';

type ChevronRightIconProps = {
  dark?: boolean;
};

export const ChevronRightIcon = ({ dark }: ChevronRightIconProps) => {
  return (
    <Svg width='8' height='14' viewBox='0 0 8 14' fill='none'>
      <Path
        d='M7.70627 6.29374C8.0969 6.68437 8.0969 7.31874 7.70627 7.70937L1.70627 13.7094C1.31565 14.1 0.681274 14.1 0.290649 13.7094C-0.0999756 13.3187 -0.0999756 12.6844 0.290649 12.2937L5.5844 6.99999L0.293774 1.70624C-0.0968506 1.31562 -0.0968506 0.681244 0.293774 0.290619C0.684399 -0.100006 1.31877 -0.100006 1.7094 0.290619L7.7094 6.29062L7.70627 6.29374Z'
        fill={dark ? '#1B2A3E' : '#293C55'}
      />
    </Svg>
  );
};
