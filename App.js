import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import products from "./src/data/products";

// Screens
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

// Components

export default function App() {
  return (
    <View style={styles.container}>
      {/* Product Screens */}
      {/* <ProductScreen products={products} />
      <ProductDetailsScreen /> */}
      <ShoppingCart />

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
});
