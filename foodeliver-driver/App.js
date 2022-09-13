import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/components/OrderItem";
import OrdersScreen from "./src/screens/OrdersScreen";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
      /> */}
      <OrdersScreen />
      <StatusBar style="auto" />
    </View>
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
