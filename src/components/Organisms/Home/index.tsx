import { Header } from '@atoms/Header';
import { VStack } from '@gluestack-ui/themed';
import { HomeActions } from '@molecules/HomeActions';
import { HomeScheduleList } from '@molecules/HomeScheduleList';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeOrganism = () => {
  return (
    <VStack flex={1} backgroundColor='$background'>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <HomeActions />
          <HomeScheduleList />
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};
