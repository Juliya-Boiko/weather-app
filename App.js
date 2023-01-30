import * as SplashScreen from 'expo-splash-screen';
import { useState, useCallback, useEffect } from 'react';
import { loadApplication } from './services/loadApplication';
import { BottomNav } from './components/BottomNav';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, View } from 'react-native';

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <BottomNav />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});