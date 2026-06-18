import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { AuthControls } from '@/components/auth/AuthControls';
import { ClerkSetupPrompt } from '@/components/ClerkSetupPrompt';
import { hasClerkPublishableKey } from '@/config/clerk';
import { AppClerkProvider } from '@/providers/AppClerkProvider';

function AppContent() {
  if (!hasClerkPublishableKey()) {
    return <ClerkSetupPrompt />;
  }

  return <AuthControls />;
}

export default function App() {
  return (
    <AppClerkProvider>
      <View style={styles.container} testID="app-root">
        <AppContent />
        <StatusBar style="auto" />
      </View>
    </AppClerkProvider>
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
