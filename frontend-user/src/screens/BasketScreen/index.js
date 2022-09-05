import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketScreen = () => {
  const [quantity, setQuantity] = useState(2);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      {/* items */}
      <Text>Your items</Text>
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        <Text style={{ fontWeight: "600" }}>Name</Text>
        <Text style={styles.price}>$12</Text>
      </View>

      <View style={styles.separator}></View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
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
    marginTop: 50,
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
