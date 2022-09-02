import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant item */}
      <View style={styles.restaurantContainer}>
        <Image
          source={require("./assets/images/restaurants/1.jpeg")}
          style={styles.image}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
