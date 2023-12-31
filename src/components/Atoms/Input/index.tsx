import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export const Input = styled(TextInput, {
  variants: {
    variant: {
      full: {
        width: '100%',
        backgroundColor: '$gray100',
        borderWidth: 1,
        borderColor: '$gray200',
        borderRadius: 8,
        height: 40,
        fontFamily: 'Regular',
        paddingHorizontal: 30,
      },
      'full-error': {
        width: '100%',
        backgroundColor: '$gray100',
        borderWidth: 1,
        borderColor: '$red800',
        borderRadius: 8,
        height: 40,
        fontFamily: 'Regular',
        paddingHorizontal: 30,
      },
    },
  },
});
