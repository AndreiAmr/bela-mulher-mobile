import { styled } from '@gluestack-style/react';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity, {
  variants: {
    variant: {
      full: {
        width: '95%',
        height: 60,
        backgroundColor: '$green800',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 37,
      },
      outline: {
        width: '95%',
        height: 60,
        backgroundColor: '$white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1,
        borderColor: '$green600',
      },
    },
  },
});
