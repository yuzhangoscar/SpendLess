import { Text, TextProps } from 'react-native';

type WelcomeTextProps = TextProps & {
  message?: string;
};

export function WelcomeText({ message = 'Welcome to Spend Less', ...props }: WelcomeTextProps) {
  return (
    <Text testID="welcome-text" accessibilityRole="header" {...props}>
      {message}
    </Text>
  );
}
