import React, { useContext } from 'react';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { Logo } from '@assets/svg/Logo';
import { LoginForms } from '@organisms/LoginForms';
import { Button } from '@atoms/Button';
import { SignInIcon } from '@assets/svg/SignIn';
import { KeyboardAvoidingView } from 'react-native';
import { useAuthAnimation } from 'src/hooks/Auth/useAuthAnimations';
import Animated from 'react-native-reanimated';
import { LoginContext } from 'src/contexts/Login/Login.context';

export const Login = () => {
  const { fontsLoaded } = useContext(LoginContext);

  const {
    items: { animatedWrapperStyle, animatedOpacityStyle },
  } = useAuthAnimation({
    hasFontsLoaded: fontsLoaded,
  });

  return (
    <VStack
      bg='$background'
      flex={1}
      alignItems='center'
      justifyContent='center'
    >
      {/* <Logo /> */}

      <KeyboardAvoidingView
        behavior='padding'
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          // borderWidth: 10,
        }}
      >
        <Animated.View style={animatedWrapperStyle}>
          <Logo />
          {fontsLoaded ? (
            <LoginForms animatedHeightStyle={animatedOpacityStyle} />
          ) : (
            <></>
          )}
        </Animated.View>
        <Button variant='full' flexDirection='row'>
          <Text color='white' fontFamily='Medium' fontSize={18}>
            Acessar
          </Text>
          <Box position='absolute' right={23}>
            <SignInIcon />
          </Box>
        </Button>
      </KeyboardAvoidingView>
    </VStack>
  );
};
