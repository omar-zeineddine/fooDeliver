import { View, Text, FlatList, StyleSheet } from "react-native";
import OrderListItem from "../OrderListItem";
import order from "../../../assets/data/orders.json";

const OrdersScreen = () => {
  return (
    <View>
      <Text>Orders Screen</Text>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  backgroundColor: "red",
});
