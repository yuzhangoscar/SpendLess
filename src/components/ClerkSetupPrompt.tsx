import { StyleSheet, Text, View } from 'react-native';

export function ClerkSetupPrompt() {
  return (
    <View style={styles.container} testID="clerk-setup-prompt">
      <Text style={styles.title}>Clerk setup required</Text>
      <Text style={styles.body}>
        Copy `.env.example` to `.env` and add your Clerk Publishable Key from the dashboard.
      </Text>
      <Text style={styles.body}>
        Then run `clerk auth login` and `clerk init --app app_3FIJMsNsc0VafppFP1YTznfVEpB` to link
        this project.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 420,
    paddingHorizontal: 20,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
});
