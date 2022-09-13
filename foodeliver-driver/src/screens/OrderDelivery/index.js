import { useRef, useMemo } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from "../../../assets/data/orders.json";
import styles from "./styles";
import MapView, { Marker } from "react-native-maps";

const order = orders[0];

const OrderDelivery = () => {
  const bottomSheetRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  return (
    <View style={styles.container}>
      <MapView
        style={{ height, width }}
        showsUserLocation
        followsUserLocation
        // initialRegion={{}}
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeDetailsText}>14 min</Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.routeDetailsText}>5 Km</Text>
        </View>
        <View style={styles.deliveryDetailsContainer}>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
          <View style={styles.addressContainer}>
            <Fontisto name="shopping-store" size={22} color="grey" />
            <Text style={styles.addressText}>{order.Restaurant.address}</Text>
          </View>

          <View style={styles.addressContainer}>
            <FontAwesome5 name="map-marker-alt" size={30} color="grey" />
            <Text style={styles.addressText}>{order.User.address}</Text>
          </View>

          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderItemText}>Meal 1 x3</Text>
            <Text style={styles.orderItemText}>Meal 2 x1</Text>
            <Text style={styles.orderItemText}>Meal 3 x2</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Accept order</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;
