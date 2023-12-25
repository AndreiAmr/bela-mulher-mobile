import { Input } from "@atoms/Input";
import { Text, VStack } from "@gluestack-ui/themed";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

export const LoginForms = () => {
  return (
    <>
      <Text fontSize={14} marginTop={27} fontFamily="Regular">
        Preencha os dados abaixo para entrar no app
      </Text>
      <VStack gap={14} width="100%" marginTop={50}>
        <Input variant="full" placeholder="E-mail" />
        <Input variant="full" placeholder="Senha" secureTextEntry />
      </VStack>

      <Text marginTop={37} fontFamily="Regular">
        Não tem conta ? <Text fontFamily="Medium">Solicite acesso!</Text>
      </Text>
    </>
  );
};
