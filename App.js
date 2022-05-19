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

  // add todo
  const handlePress = () => {
    if (!input || /^\s*$/.test(input)) {
      return;
    }
    setItems([...items, input]);
    setInput("");
  };

  const deleteTodo = (i) => {
    const copy = items.filter((item, index) => index !== i);
    setItems([...copy]);
  };
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {items.length <= 0 && <Text>No Todos Found!</Text>}
          {items.map((item, index) => (
            <TouchableOpacity onPress={() => deleteTodo(index)}>
              <Item text={item} key={index} />
            </TouchableOpacity>
          ))}
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
