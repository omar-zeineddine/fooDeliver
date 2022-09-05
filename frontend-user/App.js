import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import BasketScreen from "./src/screens/BasketScreen";
import OrdersScreen from "./src/screens/OrdersScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      <OrdersScreen />
      <StatusBar style="light" />
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
