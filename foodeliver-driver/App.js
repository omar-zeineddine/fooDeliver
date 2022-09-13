import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";
import { Entypo } from "@expo/vector-icons";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          borderColor: "#3FC060",
          borderWidth: 2,
          borderRadius: 10,
        }}
      >
        {/* restaurant */}
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{ width: "25%", height: "100%" }}
        />
        <View>
          <Text>{order.Restaurant.name}</Text>
          <Text>{order.Restaurant.address}</Text>
          <Text>Delivery Details:</Text>

          {/* user */}
          <Text>{order.User.name}</Text>
          <Text>{order.User.address}</Text>
        </View>
        <Entypo name="check" size={30} color="black" />
      </View>
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
