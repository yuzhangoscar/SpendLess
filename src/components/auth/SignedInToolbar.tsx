import { useClerk, useUser } from '@clerk/expo';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function SignedInToolbar() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const initials =
    user?.firstName?.[0] ?? user?.emailAddresses[0]?.emailAddress?.[0]?.toUpperCase() ?? '?';

  return (
    <View style={styles.toolbar} testID="signed-in-toolbar">
      <View style={styles.profile}>
        <View style={styles.avatar} testID="user-avatar">
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.email} testID="user-email">
          {user?.primaryEmailAddress?.emailAddress ?? 'Signed in'}
        </Text>
      </View>
      <Pressable style={styles.signOutButton} onPress={() => signOut()} testID="sign-out-button">
        <Text style={styles.signOutText}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    width: '100%',
    maxWidth: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
  signOutButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  signOutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});
