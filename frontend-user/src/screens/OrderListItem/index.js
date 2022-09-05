import { View, Text, Image, StyleSheet } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.details}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  details: {
    marginVertical: 5,
  },
});
