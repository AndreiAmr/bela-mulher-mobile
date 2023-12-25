import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useAuthAnimation = () => {
  const openHeightValue = 538;
  const wrapperHeight = useSharedValue(400);

  useEffect(() => {
    setTimeout(() => {
      wrapperHeight.value = withTiming(
        openHeightValue,
        { duration: 1000 },
        (isFinished) => {
          console.log("isFinished", isFinished);
        }
      );
    }, 2000);
  }, []);

  const animatedWrapperStyle = useAnimatedStyle(() => ({
    height: wrapperHeight.value,
    width: "95%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 22,
    borderRadius: 10,
    overflow: "hidden",
    transform: [{ scale: 0 }],
  }));

  return {
    items: {
      animatedWrapperStyle,
    },
  };
};
