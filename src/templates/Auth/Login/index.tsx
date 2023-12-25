import React from "react";
import {
  Box,
  ChevronRightIcon,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Logo } from "@assets/svg/Logo";
import { LoginForms } from "@organisms/LoginForms";
import { Button } from "@atoms/Button";
import { SignInIcon } from "@assets/svg/SignIn";
import { KeyboardAvoidingView } from "react-native";
import { useAuthAnimation } from "src/hooks/Auth/useAuthAnimations";
import Animated from "react-native-reanimated";

export const Login = () => {
  const {
    items: { animatedWrapperStyle },
  } = useAuthAnimation();

  return (
    <VStack
      bg="$background"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <KeyboardAvoidingView
        behavior="height"
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Animated.View style={animatedWrapperStyle}>
          <Logo />
          {true ? <LoginForms /> : <></>}
        </Animated.View>
        <Button variant="full" flexDirection="row">
          <Text color="white" fontFamily="Medium" fontSize={18}>
            Acessar
          </Text>
          <Box position="absolute" right={23}>
            <SignInIcon />
          </Box>
        </Button>
      </KeyboardAvoidingView>
    </VStack>
  );
};
