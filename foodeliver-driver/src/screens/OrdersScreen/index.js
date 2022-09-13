import { useRef } from "react";
import { View, Text, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../components/OrderItem";

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <BottomSheet ref={bottomSheetRef} snapPoints={["12%", "95%"]}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.6,
              paddingBottom: 5,
            }}
          >
            You're online{" "}
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders:{" "}
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
