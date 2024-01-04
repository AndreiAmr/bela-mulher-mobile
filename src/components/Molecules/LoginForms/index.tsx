import { Input } from '@atoms/Input';
import { Text, VStack } from '@gluestack-ui/themed';
import { FormikErrors } from 'formik';
import { useEffect, useState } from 'react';

type ValuesType = {
  email: string;
  password: string;
};

type LoginFormsProps = {
  values: ValuesType;
  handleChange(filed: string): (value: string) => void;
  errors?: FormikErrors<{ email: string; password: string }>;
};

export const LoginForms = ({
  values,
  handleChange,
  errors,
}: LoginFormsProps) => {
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
      <Text
        fontSize={14}
        // marginTop={27}
        fontFamily='Regular'
        textAlign='center'
      >
        Preencha os dados abaixo para entrar no app
      </Text>

      <VStack gap={14} width='100%' marginTop={50}>
        <Input
          value={values.email}
          variant={errors?.email ? 'full-error' : 'full'}
          placeholder='E-mail'
          onChangeText={handleChange('email')}
        />

        <Input
          value={values.password}
          variant={errors?.password ? 'full-error' : 'full'}
          placeholder='Senha'
          onChangeText={handleChange('password')}
          secureTextEntry
        />
      </VStack>

      <Text marginTop={37} fontFamily='Regular'>
        Não tem conta ? <Text fontFamily='Medium'>Solicite acesso!</Text>
      </Text>
    </>
  );
};
