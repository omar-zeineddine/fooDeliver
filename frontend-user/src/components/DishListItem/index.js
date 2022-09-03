import { View, Text, StyleSheet, Image } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>$ {dish.price}</Text>
    </View>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1.5,
  },
  name: {
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  description: {
    color: "grey",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
  },
});
