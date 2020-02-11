const validCard = (num) => {
  let numberArr = num.toString().split('');
  for (let i = numberArr.length - 2; i >= 0; i -= 2) {
    numberArr[i] = numberArr[i] * 2;
  }
  numberArr = numberArr.join('').split('');
  const summed = numberArr
    .map(n => n = parseInt(n))
    .reduce((sum, m) => sum + m);		
  return summed % 10 == 0;
}

console.log(validCard(1234567890123456)); // should be false
console.log(validCard(4408041234567893)); // should be true
console.log(validCard(38520000023237)); // should be true
console.log(validCard(4222222222222)); // should be true