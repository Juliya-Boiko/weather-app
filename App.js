import * as SplashScreen from 'expo-splash-screen';
import { useState, useCallback, useEffect } from 'react';
import { loadApplication } from './services/loadApplication';
import { BottomNav } from './components/BottomNav';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, Keyboard, ImageBackground, Pressable, Platform, StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadApplication();
      } catch (e) {
        console.log('loadApplication error--->', e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BottomNav />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
