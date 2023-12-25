import { StatusBar } from "expo-status-bar";
import { Providers } from "./src/Providers";
import { Routes } from "./src/routes";
import { useFonts } from "expo-font";
import FSRegular from "@assets/fonts/FiraSans-Regular.ttf";
import FSMedium from "@assets/fonts/FiraSans-Medium.ttf";
import FSSemibold from "@assets/fonts/FiraSans-SemiBold.ttf";
import FSBold from "@assets/fonts/FiraSans-Bold.ttf";

export default function App() {
  const [] = useFonts({
    Regular: FSRegular,
    Medium: FSMedium,
    Semibold: FSSemibold,
    Bold: FSBold,
  });

  return (
    <>
      <StatusBar animated translucent style="light" />
      <Providers>
        <Routes />
      </Providers>
    </>
  );
}
