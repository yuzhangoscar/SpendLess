import { render, screen } from '@testing-library/react-native';

import { WelcomeText } from '@/components/WelcomeText';

describe('WelcomeText', () => {
  it('renders the default welcome message', () => {
    render(<WelcomeText />);

    expect(screen.getByTestId('welcome-text')).toHaveTextContent('Welcome to Spend Less');
  });

  it('renders a custom message', () => {
    render(<WelcomeText message="Track your spending" />);

    expect(screen.getByText('Track your spending')).toBeOnTheScreen();
  });
});
