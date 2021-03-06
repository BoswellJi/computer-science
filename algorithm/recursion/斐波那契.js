
/**
 * 斐波那契数列（规律：每个数都是前两个数之和，从第三个数开始），求到n的斐波那契数列的和； 
 * 0 1 1 2 3 5 8
 * 
 * @param {*} n 第几位数值（从0开始
 */
function recurFib(n) {
  // 前两位数 0 1
  if (n < 2) {
    return n;
  }
  // 将问题进行分解
  return recurFib(n - 1) + recurFib(n - 2)
}

console.log(recurFib(0));