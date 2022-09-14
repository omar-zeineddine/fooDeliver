import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import OrderListItem from "../../components/OrderListItem";
import BasketDishItem from "../../components/BasketDishItem";
import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Order</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="grey" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
