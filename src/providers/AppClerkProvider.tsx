import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import type { ReactNode } from 'react';

import { getClerkPublishableKey } from '@/config/clerk';

type AppClerkProviderProps = {
  children: ReactNode;
};

export function AppClerkProvider({ children }: AppClerkProviderProps) {
  const publishableKey = getClerkPublishableKey();

  if (!publishableKey) {
    return children;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      {children}
    </ClerkProvider>
  );
}
