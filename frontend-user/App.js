import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import BasketScreen from "./src/screens/BasketScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDtails";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        {/* <RestaurantDetailsScreen /> */}
        {/* <DishDetailsScreen /> */}
        {/* <BasketScreen /> */}
        {/* <OrdersScreen /> */}
        {/* <OrderDetails /> */}
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
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
