import { Text, StyleSheet, Pressable, FlatList, View } from "react-native";
import { BlurView } from 'expo-blur';
import { colors } from "../styles/colors";

export const CitiesList = ({ list, cityHandler }) => {
  return (
    <BlurView intensity={20} tint="default" style={styles.list}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Pressable style={styles.item} onPress={() => cityHandler(item)}>
            <Text style={styles.text}>{item.name}, {item.country}</Text>
            <View style={styles.after}></View>
          </Pressable>
        }
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  item: {
   paddingVertical: 5,
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-400',
    fontSize: 15,
    color: colors.black,
  },
  after: {
    height: 1,
    width: '100%',
    backgroundColor: colors.black
  },
});