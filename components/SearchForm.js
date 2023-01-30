import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { BlurView } from 'expo-blur';
import { colors } from "../styles/colors";

export const SearchForm = ({ weatherData, inputValue, inputHandler, searchHandler, coords }) => {
  return (
    <View style={styles.form}>
      <BlurView intensity={20} tint="default" style={{}}>
        <TextInput
          style={styles.input}
          placeholder="type city"
          value={inputValue}
          onChangeText={(text) => inputHandler(text)}
        />
      </BlurView>
      {coords && !weatherData &&
        <BlurView intensity={20} tint="default" style={{}}>
          <Pressable style={styles.button} onPress={() => searchHandler(coords)}>
            <Text style={styles.buttonText}>search</Text>
          </Pressable>
        </BlurView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-500',
    fontSize: 20, 
    borderRadius: 25,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.black,
    color: colors.black
  },
  button: {
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: colors.white,
    opacity: 0.5
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-500',
    fontSize: 20, 
  },
});