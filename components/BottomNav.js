import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "../services/tabsNavigator";
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../styles/colors';

export const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { paddingTop: 10, backgroundColor: colors.black },
          headerShown: false,
          tabBarActiveTintColor: colors.default.bg,
          tabBarInactiveTintColor:colors.white,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => {
            return <Ionicons name={route.name === "Home" ? "location-sharp" : "md-search"} size="40" color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Search" component={SearchScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};