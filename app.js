/*A Problem Solving */
////Cau 1

function adjacentElementProduct(inputArray) {
  let maxProduct = 0;
  let product = 0;
  if (inputArray.length < 2) {
    return "Error in length of input";
  }
  maxProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    product = inputArray[i] * inputArray[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
console.log(adjacentElementProduct([2, 3, -5, -2, 4]));
////Cau 2

function alternatingSums(a) {
  let a1 = 0;
  let a2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      a1 = a1 + a[i];
    } else {
      a2 = a2 + a[i];
    }
  }
  return [a1, a2];
}
console.log(alternatingSums([60, 40, 55, 75, 64]));
