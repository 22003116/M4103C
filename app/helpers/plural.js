import { helper } from '@ember/component/helper';

export default helper(function plural(params /*, named*/) {
  let [count, zero, one, other] = params;
  if (count === 0) return zero;
  if (count === 1) return '1 ' + one;
  //return count + ' ' + other;

  switch (count) {
    case 0:
      return zero;
    case 1:
      return '1 ' + one;
    default:
      return count + ' ' + other;
  }
});
