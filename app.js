#!/usr/bin/env node

const [arr, sum, ...rest] = process.argv.slice(2)

const getPairsCount = (arr, sum) =>
arr.reduce((result, value, i) => {
  arr.slice(i + 1).forEach(item => {
    if (value + item === sum) {
      result.push([value, item]);
    }
  });
  return result;
}, []);

const array = arr.split(',').map(item => Number(item))
const target = Number(sum);

const pairs = getPairsCount(array, target);
pairs.forEach(pairs => console.log(pairs.toString()))