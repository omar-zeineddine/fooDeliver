import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* restaurant */}
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{order.Restaurant.name}</Text>
        <Text>{order.Restaurant.address}</Text>
        <Text>Delivery Details:</Text>

        {/* user */}
        <Text>{order.User.name}</Text>
        <Text>{order.User.address}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
