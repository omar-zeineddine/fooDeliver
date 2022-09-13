import { useRef, useMemo } from "react";
import { View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from "../../../assets/data/orders.json";

const order = orders[0];

const OrderDelivery = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 100 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 25, letterSpacing: 1 }}>
            14 min
          </Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>5 Km</Text>
        </View>
        <View>
          <Text style={{ fontSize: 25, letterSpacing: 1, paddingVertical: 20 }}>
            {order.Restaurant.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "grey",
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            {order.Restaurant.address}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "grey",
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            {order.User.address}
          </Text>

          <Text>Meal 1 x3</Text>
          <Text>Meal 2 x1</Text>
          <Text>Meal 3 x2</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;
