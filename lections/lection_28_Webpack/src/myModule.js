import { b } from './anotherModule';
const a = 1;

// function hello() {
//   // console.log(b);
//   console.log('hello');
// }

function hello() {
  console.log(b);
  console.log('hello');
}


export {
  hello,
  a,
}

export const c = 56;
export function myFunc() {}
export class MyClass {}

export default 1;
// module.exports = {
//   hello,
// }
