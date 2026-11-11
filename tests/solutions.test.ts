// Minimal Node test declarations so this project needs only TypeScript as a dependency.
declare function require(name: string): any;
const { test } = require('node:test');
const assert = require('node:assert/strict');
import { validBrackets } from '../src/01-brackets';
import { sortStrings } from '../src/02-sort-strings';
import { autocomplete } from '../src/03-autocomplete';
import { toRoman, fromRoman } from '../src/04-roman';
import { descendingDigits } from '../src/05-descending-digits';
import { tribonacci } from '../src/06-tribonacci';
test('bracket matching', () => {
  for (const x of ['()', '([{}])', '']) assert.equal(validBrackets(x), true);
  for (const x of ['([]]', '([[{}]]]', ')', '(]}])', '([)]', '{']) assert.equal(validBrackets(x), false);
});
test('natural string sort', () => {
  assert.deepEqual(sortStrings(['TH19', 'SG20', 'TH2']), ['SG20', 'TH2', 'TH19']);
  assert.deepEqual(sortStrings(['TH10', 'TH3Netflix', 'TH1', 'TH7']), ['TH1', 'TH3Netflix', 'TH7', 'TH10']);
});
test('autocomplete', () => {
  assert.deepEqual(autocomplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 2), ['Think', 'Mother']);
  assert.deepEqual(autocomplete('TH', ['mother', 'think', 'path'], 3), ['think', 'mother', 'path']);
  assert.deepEqual(autocomplete('a', ['apple'], 0), []);
});
test('Roman numeral conversions', () => {
  for (const [number, roman] of [[1989, 'MCMLXXXIX'], [2000, 'MM'], [68, 'LXVIII'], [109, 'CIX']] as const) {
    assert.equal(toRoman(number), roman);
    assert.equal(fromRoman(roman), number);
  }
  assert.throws(() => fromRoman('IIII'));
  assert.throws(() => toRoman(0));
});
test('descending digits', () => {
  for (const [input, output] of [[3008, 8300], [1989, 9981], [2679, 9762], [9163, 9631]]) assert.equal(descendingDigits(input), output);
});
test('Tribonacci', () => {
  assert.deepEqual(tribonacci([1, 3, 5], 5), [1, 3, 5, 9, 17]);
  assert.deepEqual(tribonacci([2, 2, 2], 3), [2, 2, 2]);
  assert.deepEqual(tribonacci([10, 10, 10], 4), [10, 10, 10, 30]);
  assert.deepEqual(tribonacci([], 5), [0, 0, 0, 0, 0]);
  assert.deepEqual(tribonacci([1], 5), [1, 0, 0, 1, 1]);
});
