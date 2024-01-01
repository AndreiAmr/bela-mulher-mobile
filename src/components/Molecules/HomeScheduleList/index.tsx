import { SchedulePreview } from '@atoms/SchedulePreview';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { Schedule } from 'src/types/Schedule/schedule';
import { FlatList } from 'react-native-gesture-handler';
import { useUserStore } from '@store/user/user.store';
import { useScheduleList } from 'src/infra/queries/useScheduleList';

export const HomeScheduleList = () => {
  const { user } = useUserStore();
  const { data } = useScheduleList(user?.id!);

  return (
    <VStack paddingHorizontal={20} marginTop={40}>
      <Text
        color='$white'
        fontFamily='Semibold'
        fontSize={16}
        marginBottom={25}
      >
        Seus agendamentos para hoje
      </Text>
      <VStack
        borderRadius={10}
        backgroundColor='$green800'
        padding={11}
        gap={7}
      >
        <FlatList
          data={data}
          style={{ maxHeight: 300 }}
          renderItem={({ item }) => {
            const {
              client: { name },
              procedure: { name: procediment },
            } = item as Schedule;
            return (
              <>
                <SchedulePreview
                  hour={'10:20'}
                  name={name}
                  procediment={procediment}
                />
                <Box height={8} />
              </>
            );
          }}
        />
      </VStack>
    </VStack>
  );
};
