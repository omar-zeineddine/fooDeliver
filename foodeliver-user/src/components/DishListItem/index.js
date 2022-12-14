import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Dish", { id: dish.id })}
      style={styles.container}
    >
      <View style={styles.dish}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      <View>
        {/* conditional render of image */}
        {dish.image && (
          <Image source={{ uri: dish.image }} style={styles.image} />
        )}
      </View>
    </Pressable>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingBottom: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  dish: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "grey",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 80,
    aspectRatio: 1,
  },
});
