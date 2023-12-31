// import { useUserStore } from '@stores/user/user.store';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { ErrorCustom } from 'src/types/error';
import * as Yup from 'yup';
import { useUserStore } from '@store/user/user.store';
import { loginRequest } from '@services/Auth/Login';
import { useNavigation } from '@react-navigation/native';

type ModalizeContentProps = {
  title: string;
  description: string;
};

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const useLogin = () => {
  const modalizeRef = useRef<Modalize>(null);
  const [modalizeContent, setModalContent] = useState<ModalizeContentProps>();
  const userStore = useUserStore();
  const navigation = useNavigation<any>();

  const { values, errors, setFieldValue, handleSubmit, setErrors } = useFormik({
    initialValues: {
      email: 'andreiamaral74@gmail.com',
      password: 'amaral...',
    },
    onSubmit: async (values) => {
      try {
        const data = await loginRequest(values);
        userStore.setUser(data.user);
        navigation.navigate('Home');
      } catch (err: any) {
        const {
          response: { data },
        } = err as ErrorCustom;

        if (data.message === 'User not found') {
          setErrors({
            email: 'Usuário não encontrado',
            password: 'Senha incorreta',
          });
          setModalContent({
            title: 'Opa! Usuário não encontrado!',
            description:
              'Por favor, verifique seu e-mail e senha e tente novamente.',
          });
          modalizeRef.current?.open();
        }

        if (data.message === 'Invalid password') {
          setModalContent({
            title: 'Opa! Senha inválida!',
            description: 'Por favor, verifique sua senha e tente novamente.',
          });
          modalizeRef.current?.open();
          setErrors({
            password: 'Senha incorreta',
          });
        }
      }
    },
    validationSchema: loginValidationSchema,
    // validateOnChange: false,
  });

  const handleChange = (field: string) => {
    return (value: string) => setFieldValue(field, value);
  };

  return {
    items: {
      values,
      errors,
      modalizeRef,
      modalizeContent,
    },
    handlers: {
      handleChange,
      handleSubmit,
    },
  };
};
