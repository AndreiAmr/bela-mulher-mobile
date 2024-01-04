import { Button } from '@atoms/Button';
import { Badge, Text } from '@gluestack-ui/themed';
import { Box, HStack, VStack } from '@gluestack-ui/themed';

export const CurrentProcedure = () => {
  return (
    <VStack
      width='100%'
      height={160}
      backgroundColor='$green800'
      padding={22}
      borderRadius={10}
    >
      <HStack flexDirection='row' justifyContent='space-between'>
        <Box gap={3}>
          <Text fontFamily='Medium' fontSize={16} color='$white'>
            Andrei Amaral
          </Text>
          <Text color='$white'>Luzes - Cabelo crespo</Text>
          <HStack
            height={16}
            alignItems='center'
            flexDirection='row'
            marginTop={6}
          >
            {/* <Box width={16}>
              <ClockIcon />
            </Box> */}
            <Text
              color='$white'
              fontSize={16}
              fontFamily='Regular'
              marginRight={6}
            >
              Hora:
            </Text>
            <Text color='$white' fontSize={16} fontFamily='Medium'>
              10:40
            </Text>
          </HStack>
        </Box>
        <Badge
          borderRadius={15}
          borderWidth={1}
          borderColor='$green900'
          width={125}
          height={25}
          justifyContent='center'
          alignItems='center'
        >
          <Text fontSize={12} color='$white' fontFamily='Medium'>
            Em Andamento
          </Text>
        </Badge>
      </HStack>

      <HStack flexDirection='row' marginTop={18} gap={19}>
        <Button
          flex={1}
          backgroundColor='$red800'
          paddingVertical={11}
          justifyContent='center'
          alignItems='center'
          borderRadius={6}
        >
          <Text color='$white' fontFamily='Medium'>
            Cancelar
          </Text>
        </Button>
        <Button
          flex={1}
          backgroundColor='$green900'
          paddingVertical={11}
          justifyContent='center'
          alignItems='center'
          borderRadius={6}
        >
          <Text color='$white' fontFamily='Medium'>
            Feito!
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};
