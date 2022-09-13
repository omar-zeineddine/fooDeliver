import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/components/OrderItem";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      <OrderItem order={order} />
      <OrderItem order={orders[1]} />
      <OrderItem order={orders[2]} />
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
  },
});
