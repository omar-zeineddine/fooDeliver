import { View, FlatList, StyleSheet } from "react-native";
import OrderListItem from "../../components/OrderListItem";
// import orders from "../../../assets/data/orders.json";
import { useOrderContext } from "../../contexts/OrderContext";

const OrdersScreen = () => {
  const { orders } = useOrderContext();

  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
  },
});
