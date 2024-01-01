import { Button } from '@atoms/Button';
import { Text, IButtonProps, Box } from '@gluestack-ui/themed';

type ButtonIconProps = {
  label: string;
  onPress(): void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  ligthBackground?: boolean;
};

export const ButtonIcon = ({
  label,
  onPress,
  iconLeft,
  iconRight,
  ligthBackground,
}: ButtonIconProps) => {
  return (
    <Button
      onPress={onPress}
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      paddingVertical={20}
      backgroundColor={ligthBackground ? '$green800' : '$green700'}
      borderRadius={8}
      paddingHorizontal={15}
    >
      {iconLeft}
      <Text fontSize={14} fontFamily='Regular' color='$white'>
        {label}
      </Text>

      {iconRight}
    </Button>
  );
};
