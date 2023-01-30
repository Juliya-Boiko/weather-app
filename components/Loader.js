import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../styles/colors";

export const Loader = () => { 
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.default.color} size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.default.bg,
  },
});