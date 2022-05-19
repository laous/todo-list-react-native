import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Item = () => {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}>This is an Item</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left: {
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BcF6",
    borderWidth: 2,
    borderRadius: 5,
    opacity: 0.4,
  },
});
