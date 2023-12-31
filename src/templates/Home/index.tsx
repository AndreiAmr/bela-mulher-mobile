import { Box, Text } from '@gluestack-ui/themed';
import { useUserStore } from '@store/user/user.store';

export const HomeTemplate = () => {
  const { user } = useUserStore();

  console.log({ username: user?.name });
  return (
    <Box backgroundColor='$background' flex={1}>
      <Text>Hi, I am home screen</Text>
    </Box>
  );
};
