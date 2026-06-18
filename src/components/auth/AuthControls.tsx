import { ClerkLoaded, ClerkLoading, Show } from '@clerk/expo';
import { useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native';

import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { SignedInToolbar } from '@/components/auth/SignedInToolbar';
import { WelcomeText } from '@/components/WelcomeText';

type AuthMode = 'sign-in' | 'sign-up';

function SignedOutAuth() {
  const [mode, setMode] = useState<AuthMode>('sign-in');

  return (
    <View style={styles.authContainer} testID="auth-screen">
      <WelcomeText message="Spend Less" />
      <Text style={styles.subtitle}>Sign in to track spending and get insights</Text>
      {mode === 'sign-in' ? (
        <SignInForm onSwitchToSignUp={() => setMode('sign-up')} />
      ) : (
        <SignUpForm onSwitchToSignIn={() => setMode('sign-in')} />
      )}
    </View>
  );
}

function SignedInContent() {
  return (
    <View style={styles.signedInContainer} testID="signed-in-screen">
      <SignedInToolbar />
      <WelcomeText />
    </View>
  );
}

export function AuthControls() {
  return (
    <>
      <ClerkLoading>
        <View style={styles.loadingContainer} testID="auth-loading">
          <ActivityIndicator size="large" color="#0a7ea4" />
        </View>
      </ClerkLoading>
      <ClerkLoaded>
        <Show when="signed-out">
          <SignedOutAuth />
        </Show>
        <Show when="signed-in">
          <SignedInContent />
        </Show>
      </ClerkLoaded>
      {Platform.OS === 'web' ? <View nativeID="clerk-captcha" /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContainer: {
    width: '100%',
    maxWidth: 420,
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
  },
  signedInContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
});
