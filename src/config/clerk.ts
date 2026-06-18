const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function getClerkPublishableKey(): string | undefined {
  return publishableKey;
}

export function hasClerkPublishableKey(): boolean {
  return Boolean(publishableKey && publishableKey !== 'pk_test_your_publishable_key_here');
}
