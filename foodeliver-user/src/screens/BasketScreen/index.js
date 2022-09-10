import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../contexts/BasketContext";

const restaurant = restaurants[0];

const BasketScreen = () => {
  const { restaurant, basketDishes, totalPrice } = useBasketContext();

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>

      {/* items */}
      <Text style={styles.items}>Your items</Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      {/* <View style={styles.separator}></View> */}

      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226; $ {totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  items: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "grey",
  },
  separator: {
    backgroundColor: "lightgrey",
    height: 1,
    marginTop: 5,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  price: {
    marginLeft: "auto",
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
