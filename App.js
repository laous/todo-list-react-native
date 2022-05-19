import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Item from "./components/Item";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // add item
  const handlePress = () => {
    setItems([...items, input]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {items.map((item, index) => {
            return <Item text={item} key={index} />;
          })}
        </View>
      </View>

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTodo}
      >
        <TextInput
          style={styles.input}
          placeholder="Add todo!"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <TouchableOpacity onPress={() => handlePress()}>
          <View style={styles.addTodo}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTodo: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "100%",
    maxWidth: 250,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
  },
  addTodo: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {},
});
