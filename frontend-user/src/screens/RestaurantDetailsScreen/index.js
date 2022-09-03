import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
  },
  subtitle: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
  },
});
