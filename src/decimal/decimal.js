import { Decimal } from 'decimal.js';
import { muldivfloat } from './muldivfloat';
import { floatObj } from './floatObj';

export { Decimal, muldivfloat, floatObj };
/* var a = 0.13;
var b = 0.25;

console.time('decimal');
console.log('使用Decimaljs a * b =', new Decimal(a).mul(new Decimal(b)).toNumber());
console.timeEnd('decimal');

console.time('test1');
console.log('使用test1 a * b =', muldivfloat(a, b, '*'));
console.timeEnd('test1');

console.time('test2');
console.log('使用test2 a * b =', floatObj.multiply(a, b));
console.timeEnd('test2'); */
