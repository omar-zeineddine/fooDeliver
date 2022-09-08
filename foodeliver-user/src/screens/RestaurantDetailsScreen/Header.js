import { View, Text, Image } from "react-native";
import styles from "./styles";
const DEFAULT_IMG = "https://fakeimg.pl/640x360";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMG,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(2)} &#8226;{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
