import { CurrencyConvertorPipe } from './currency-convertor.pipe';

describe('CurrencyConvertorPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConvertorPipe();
    expect(pipe).toBeTruthy();
  });
});
