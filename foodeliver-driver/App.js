import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/components/OrderItem";
import OrdersScreen from "./src/screens/OrdersScreen";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const order = orders[0];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <OrdersScreen />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <OrdersScreen />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
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
