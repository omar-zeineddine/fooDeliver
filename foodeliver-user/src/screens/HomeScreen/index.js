import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RestaurantItem from "../../../src/components/RestaurantItem";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   // console.log(results);
  //   setRestaurants(results);
  // };

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
    paddingVertical: 30,
  },
});
