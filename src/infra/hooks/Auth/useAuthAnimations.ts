import { useEffect } from 'react';
import {
  BounceIn,
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type UseAuthAnimationProps = {
  hasFontsLoaded: boolean;
};

export const useAuthAnimation = ({ hasFontsLoaded }: UseAuthAnimationProps) => {
  const openHeightValue = 520;
  const wrapperHeight = useSharedValue(300);
  const elementHeight = useSharedValue(0);

  useEffect(() => {
    if (hasFontsLoaded) {
      setTimeout(() => {
        wrapperHeight.value = withTiming(
          openHeightValue,

          { duration: 1000, easing: Easing.bounce },
          (isFinished) => {
            console.log('isFinished', isFinished);
          }
        );
      }, 2000);

      setTimeout(() => {
        elementHeight.value = withTiming(
          40,

          { duration: 1000, easing: Easing.ease },
          (isFinished) => {
            console.log('isFinished', isFinished);
          }
        );
      }, 2500);
    }
  }, [hasFontsLoaded]);

  const animatedWrapperStyle = useAnimatedStyle(() => ({
    height: wrapperHeight.value,
    width: '95%',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
    borderRadius: 10,
    overflow: 'hidden',
  }));

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      height: elementHeight.value,
      width: '100%',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',

      // borderWidth: 1,
    };
  });

  return {
    items: {
      animatedWrapperStyle,
      animatedOpacityStyle,
    },
  };
};
