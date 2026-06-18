import { formatCurrency } from '@/utils/formatCurrency';

describe('formatCurrency', () => {
  it('formats USD amounts for en-US locale', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });

  it('supports custom currency and locale', () => {
    expect(formatCurrency(10, 'EUR', 'de-DE')).toMatch(/10,00/);
  });
});
