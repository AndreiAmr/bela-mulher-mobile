import { Input } from '@atoms/Input';
import { Text, VStack } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';

import Animated from 'react-native-reanimated';

type LoginFormsProps = {
  animatedHeightStyle: any;
};

export const LoginForms = ({ animatedHeightStyle }: LoginFormsProps) => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElements(true);
    }, 2000);
  }, []);

  if (!showElements) {
    return <></>;
  }

  return (
    <>
      <Animated.View style={animatedHeightStyle}>
        <Text
          fontSize={14}
          // marginTop={27}
          fontFamily='Regular'
          textAlign='center'
        >
          Preencha os dados abaixo para entrar no app
        </Text>
      </Animated.View>
      <VStack gap={14} width='100%' marginTop={50}>
        <Animated.View style={animatedHeightStyle}>
          <Input variant='full' placeholder='E-mail' />
        </Animated.View>
        <Animated.View style={animatedHeightStyle}>
          <Input variant='full' placeholder='Senha' secureTextEntry />
        </Animated.View>
      </VStack>

      <Text marginTop={37} fontFamily='Regular'>
        Não tem conta ? <Text fontFamily='Medium'>Solicite acesso!</Text>
      </Text>
    </>
  );
};
