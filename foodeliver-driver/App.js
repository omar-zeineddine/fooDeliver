import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
