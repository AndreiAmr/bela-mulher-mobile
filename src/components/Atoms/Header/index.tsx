import { MenuIcon } from '@assets/svg/Menu';
import { Button } from '@atoms/Button';
import { HStack, Text } from '@gluestack-ui/themed';
import { useUserStore } from '@store/user/user.store';
import { Platform } from 'react-native';

export const Header = () => {
  const { user } = useUserStore();
  const isAndroid = Platform.OS === 'android';
  return (
    <HStack
      paddingTop={isAndroid ? 55 : 29}
      paddingBottom={19}
      paddingHorizontal={26}
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      borderBottomWidth={1}
      borderColor='$green800'
    >
      <Text fontFamily='Semibold' color='$white' fontSize={19}>
        Olá, {user?.name}
      </Text>

      <Button
        width={40}
        height={30}
        backgroundColor='$green800'
        alignItems='center'
        justifyContent='center'
        borderRadius={4}
      >
        <MenuIcon />
      </Button>
    </HStack>
  );
};
