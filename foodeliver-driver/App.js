import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import AuthContextProvider from "./src/contexts/AuthContext";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
