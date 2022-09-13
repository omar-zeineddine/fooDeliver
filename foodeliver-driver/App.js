import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import orders from "./assets/data/orders.json";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDelivery from "./src/screens/OrderDelivery";

const order = orders[0];

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <OrdersScreen /> */}
          <OrderDelivery />
          <StatusBar style="auto" />
        </View>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
