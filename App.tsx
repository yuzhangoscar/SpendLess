import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { WelcomeText } from '@/components/WelcomeText';

export default function App() {
  return (
    <View style={styles.container} testID="app-root">
      <WelcomeText />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
