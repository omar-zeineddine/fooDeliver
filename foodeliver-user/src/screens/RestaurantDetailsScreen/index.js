import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  // console.warn(id);

  useEffect(() => {
    // fetch restaurant with id
    DataStore.query(Restaurant, id).then(setRestaurant);
  }, []);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color={"darkgrey"} />;
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;
