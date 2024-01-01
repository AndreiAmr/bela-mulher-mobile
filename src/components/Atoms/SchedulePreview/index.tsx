import { Button } from '@atoms/Button';
import { HStack, Text, VStack } from '@gluestack-ui/themed';

type SchedulePreviewProps = {
  name: string;
  hour: string;
  procediment: string;
};

export const SchedulePreview = ({
  name,
  hour,
  procediment,
}: SchedulePreviewProps) => {
  return (
    <Button backgroundColor='$green700' borderRadius={8} padding={20}>
      <HStack flexDirection='row' justifyContent='space-between'>
        <HStack flexDirection='row' justifyContent='space-between' flex={1}>
          <VStack gap={3}>
            <Text color='$white' fontFamily='Medium'>
              {name}
            </Text>
            <Text color='$white'>{procediment}</Text>
          </VStack>

          <HStack>
            <Text color='$white' fontFamily='Medium'>
              {hour}
            </Text>
          </HStack>
        </HStack>
      </HStack>
      <HStack flexDirection='row' justifyContent='flex-end'>
        <Text color='$yellow600'>Ver detalhes</Text>
      </HStack>
    </Button>
  );
};
