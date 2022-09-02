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
        <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
        <Text style={styles.subtitle}>$ 1.99 15-30 minutes</Text>
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
    padding: 5,
  },
  restaurantContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "grey",
  },
});
