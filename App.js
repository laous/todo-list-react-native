import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}

      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}>
          Today's Task
        </Text>
        <View style={styles.items}>
          <Item />
          <Item />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  wrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  }
});
