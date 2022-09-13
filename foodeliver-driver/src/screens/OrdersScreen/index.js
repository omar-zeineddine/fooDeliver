import { useRef, useMemo, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../components/OrderItem";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const OrdersScreen = () => {
  const [driverLocation, setDriverLocation] = useState(null);

  const bottomSheetRef = useRef(null);

  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["12%", "95%"], []);

  useEffect(() => {
    // request user location
    const getDeliveryLocations = async (async) => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (!status === "granted") {
        console.log("no");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setDriverLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };
    getDeliveryLocations();
  }, []);

  // console.warn(driverLocation);

  if (!driverLocation) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{ height, width }}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: driverLocation.latitude,
          longitude: driverLocation.longitude,

          // how close to location on screen:
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            title={order.Restaurant.name}
            description={order.Restaurant.address}
            coordinate={{
              latitude: order.Restaurant.lat,
              longitude: order.Restaurant.lng,
            }}
          >
            <View
              style={{ backgroundColor: "green", padding: 5, borderRadius: 20 }}
            >
              <Entypo name="shop" size={24} color="white" />
            </View>
          </Marker>
        ))}
      </MapView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders: {orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
