import { PropsWithChildren, createContext } from 'react';
import { useFonts } from 'expo-font';
import FSRegular from '@assets/fonts/FiraSans-Regular.ttf';
import FSMedium from '@assets/fonts/FiraSans-Medium.ttf';
import FSSemibold from '@assets/fonts/FiraSans-SemiBold.ttf';
import FSBold from '@assets/fonts/FiraSans-Bold.ttf';

type LoginContextData = {
  fontsLoaded: boolean;
};

export const LoginContext = createContext<LoginContextData>({
  fontsLoaded: false,
});

export const LoginContextProvider = ({ children }: PropsWithChildren) => {
  const [fontsLoaded] = useFonts({
    Regular: FSRegular,
    Medium: FSMedium,
    Semibold: FSSemibold,
    Bold: FSBold,
  });

  return (
    <LoginContext.Provider
      value={{
        fontsLoaded,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
