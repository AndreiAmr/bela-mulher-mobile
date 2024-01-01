import React, { useEffect } from 'react';

import { useLogin } from '@hooks/Auth/useLogin';

import { Box, Text, VStack } from '@gluestack-ui/themed';
import { KeyboardAvoidingView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Logo } from '@assets/svg/Logo';
import { LoginForms } from '@molecules/LoginForms';
import { Button } from '@atoms/Button';
import { SignInIcon } from '@assets/svg/SignIn';
import { useAppStore } from '@store/app/app.store';
import FSRegular from '@assets/fonts/FiraSans-Regular.ttf';
import FSMedium from '@assets/fonts/FiraSans-Medium.ttf';
import FSSemibold from '@assets/fonts/FiraSans-SemiBold.ttf';
import FSBold from '@assets/fonts/FiraSans-Bold.ttf';
import { useFonts } from 'expo-font';

export const LoginMolecule = () => {
  const [fontsLoaded] = useFonts({
    Regular: FSRegular,
    Medium: FSMedium,
    Semibold: FSSemibold,
    Bold: FSBold,
  });

  const { isFontsLoaded, setIsFontsLoaded } = useAppStore();
  const { items, handlers } = useLogin();

  useEffect(() => {
    if (fontsLoaded) {
      setIsFontsLoaded(true);
    }
  }, [fontsLoaded]);

  return (
    <VStack
      bg='$background'
      flex={1}
      alignItems='center'
      justifyContent='center'
    >
      <KeyboardAvoidingView
        behavior='height'
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Box
          backgroundColor='$white'
          width='95%'
          alignItems='center'
          padding={24}
          borderRadius={10}
        >
          <Logo />
          {isFontsLoaded ? (
            <LoginForms
              values={items.values}
              handleChange={handlers.handleChange}
              errors={items.errors}
            />
          ) : (
            <></>
          )}
        </Box>
        {isFontsLoaded && (
          <Button
            variant='full'
            flexDirection='row'
            onPress={() => handlers.handleSubmit()}
          >
            <Text color='white' fontFamily='Medium' fontSize={18}>
              Acessar
            </Text>
            <Box position='absolute' right={23}>
              <SignInIcon />
            </Box>
          </Button>
        )}
      </KeyboardAvoidingView>
      <Modalize
        ref={items.modalizeRef}
        snapPoint={230}
        closeOnOverlayTap={false}
        modalHeight={230}
      >
        <Box paddingHorizontal={22}>
          <Text fontFamily='Bold' fontSize={20} marginTop={28}>
            {items.modalizeContent?.title}
          </Text>
          <Text
            fontFamily='Regular'
            fontSize={14}
            marginTop={11}
            marginBottom={37}
          >
            {items.modalizeContent?.description}
          </Text>
          <Button variant='outline'>
            <Text fontFamily='Medium' fontSize={16} color='#4B91F1'>
              Entendido
            </Text>
          </Button>
        </Box>
      </Modalize>
    </VStack>
  );
};
