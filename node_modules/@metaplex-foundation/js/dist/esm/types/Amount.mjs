import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import BN from 'bn.js';
import { UnexpectedCurrencyError, CurrencyMismatchError } from '../errors/SdkError.mjs';

const SOL = {
  symbol: 'SOL',
  decimals: 9
};
const USD = {
  symbol: 'USD',
  decimals: 2
};
const amount = (basisPoints, currency) => {
  return {
    basisPoints: toBasisPoints(basisPoints),
    currency
  };
};
const lamports = lamports => {
  return amount(lamports, SOL);
};
const sol = sol => {
  return lamports(sol * LAMPORTS_PER_SOL);
};
const usd = usd => {
  return amount(usd * 100, USD);
};
const toBasisPoints = value => {
  return new BN(value);
};
const isSol = currencyOrAmount => {
  return sameCurrencies(currencyOrAmount, SOL);
};
const sameCurrencies = (left, right) => {
  if ('currency' in left) {
    left = left.currency;
  }

  if ('currency' in right) {
    right = right.currency;
  }

  return left.symbol === right.symbol && left.decimals === right.decimals && left.namespace === right.namespace;
};
const assertCurrency = (actual, expected) => {
  if ('currency' in actual) {
    actual = actual.currency;
  }

  if (!sameCurrencies(actual, expected)) {
    throw new UnexpectedCurrencyError(actual, expected);
  }
};
const assertSol = actual => {
  assertCurrency(actual, SOL);
};
const assertSameCurrencies = (left, right, operation) => {
  if ('currency' in left) {
    left = left.currency;
  }

  if ('currency' in right) {
    right = right.currency;
  }

  if (!sameCurrencies(left, right)) {
    throw new CurrencyMismatchError(left, right, operation);
  }
};
const addAmounts = (left, right) => {
  assertSameCurrencies(left, right, 'add');
  return amount(left.basisPoints.add(right.basisPoints), left.currency);
};
const subtractAmounts = (left, right) => {
  assertSameCurrencies(left, right, 'subtract');
  return amount(left.basisPoints.sub(right.basisPoints), left.currency);
};
const multiplyAmount = (left, multiplier) => {
  return amount(left.basisPoints.muln(multiplier), left.currency);
};
const divideAmount = (left, divisor) => {
  return amount(left.basisPoints.divn(divisor), left.currency);
};
const compareAmounts = (left, right) => {
  assertSameCurrencies(left, right, 'compare');
  return left.basisPoints.cmp(right.basisPoints);
};
const isEqualToAmount = (left, right) => compareAmounts(left, right) === 0;
const isLessThanAmount = (left, right) => compareAmounts(left, right) < 0;
const isLessThanOrEqualToAmount = (left, right) => compareAmounts(left, right) <= 0;
const isGreaterThanAmount = (left, right) => compareAmounts(left, right) > 0;
const isGreaterThanOrEqualToAmount = (left, right) => compareAmounts(left, right) >= 0;
const isZeroAmount = value => compareAmounts(value, amount(0, value.currency)) === 0;
const isPositiveAmount = value => compareAmounts(value, amount(0, value.currency)) >= 0;
const isNegativeAmount = value => compareAmounts(value, amount(0, value.currency)) < 0;
const formatAmount = value => {
  const power = new BN(10).pow(new BN(value.currency.decimals));
  const basisPoints = value.basisPoints;
  const {
    div,
    mod
  } = basisPoints.divmod(power);
  const units = `${div.toString()}.${mod.abs().toString()}`;
  return `${value.currency.symbol} ${units}`;
};

export { SOL, USD, addAmounts, amount, assertCurrency, assertSameCurrencies, assertSol, compareAmounts, divideAmount, formatAmount, isEqualToAmount, isGreaterThanAmount, isGreaterThanOrEqualToAmount, isLessThanAmount, isLessThanOrEqualToAmount, isNegativeAmount, isPositiveAmount, isSol, isZeroAmount, lamports, multiplyAmount, sameCurrencies, sol, subtractAmounts, toBasisPoints, usd };
//# sourceMappingURL=Amount.mjs.map
