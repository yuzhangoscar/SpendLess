import { useSignIn } from '@clerk/expo';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type SignInFormProps = {
  onSwitchToSignUp: () => void;
};

export function SignInForm({ onSwitchToSignUp }: SignInFormProps) {
  const { signIn, errors, fetchStatus } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    const { error } = await signIn.password({ emailAddress, password });
    if (error) {
      return;
    }

    if (signIn.status === 'complete') {
      await signIn.finalize();
      return;
    }

    if (signIn.status === 'needs_client_trust') {
      const emailCodeFactor = signIn.supportedSecondFactors?.find(
        (factor) => factor.strategy === 'email_code',
      );

      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
      }
    }
  };

  const handleVerify = async () => {
    await signIn.mfa.verifyEmailCode({ code });

    if (signIn.status === 'complete') {
      await signIn.finalize();
    }
  };

  if (signIn.status === 'needs_client_trust') {
    return (
      <View style={styles.container} testID="sign-in-verify-screen">
        <Text style={styles.title}>Verify your account</Text>
        <TextInput
          style={styles.input}
          value={code}
          placeholder="Enter your verification code"
          placeholderTextColor="#666666"
          onChangeText={setCode}
          keyboardType="numeric"
          testID="sign-in-code-input"
        />
        {errors.fields.code ? <Text style={styles.error}>{errors.fields.code.message}</Text> : null}
        <Pressable
          style={[styles.button, fetchStatus === 'fetching' && styles.buttonDisabled]}
          onPress={handleVerify}
          disabled={fetchStatus === 'fetching'}
          testID="sign-in-verify-button"
        >
          <Text style={styles.buttonText}>Verify</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container} testID="sign-in-screen">
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        placeholderTextColor="#666666"
        onChangeText={setEmailAddress}
        keyboardType="email-address"
        testID="sign-in-email-input"
      />
      {errors.fields.emailAddress ? (
        <Text style={styles.error}>{errors.fields.emailAddress.message}</Text>
      ) : null}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        placeholderTextColor="#666666"
        secureTextEntry
        onChangeText={setPassword}
        testID="sign-in-password-input"
      />
      {errors.fields.password ? (
        <Text style={styles.error}>{errors.fields.password.message}</Text>
      ) : null}
      <Pressable
        style={[
          styles.button,
          (!emailAddress || !password || fetchStatus === 'fetching') && styles.buttonDisabled,
        ]}
        onPress={handleSubmit}
        disabled={!emailAddress || !password || fetchStatus === 'fetching'}
        testID="sign-in-submit-button"
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <View style={styles.linkRow}>
        <Text>Need an account? </Text>
        <Pressable onPress={onSwitchToSignUp} testID="switch-to-sign-up-button">
          <Text style={styles.link}>Sign up</Text>
        </Pressable>
      </View>
      <View nativeID="clerk-captcha" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 360,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  link: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
  error: {
    color: '#d32f2f',
    fontSize: 12,
  },
});
