import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  // defining custom fonts
  useFonts({
    'outfit-thin': require('../assets/fonts/Outfit-Thin.ttf'),
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })

  
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
