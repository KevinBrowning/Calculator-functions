// This will get the sum of the two arguments(numbers) passed
const getSum = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
 const sum = firstNum + secondNum;
 return sum;
}

// This will get the divedend of the two arguments(numbers) passed
const getDivedend = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const divedend = firstNum / secondNum;
  return divedend;
}

// This will get the product of the two arguments(numbers) passed
const getProduct = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const product = firstNum * secondNum;
  return product;
}

// This will get the difference of the two arguments(numbers) passed
const getDifference = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const difference = firstNum - secondNum;
  return difference;
}

// This will inverse whatever number consoled
const inverseNum = (firstNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const inverse = firstNum * -1;
  if(inverse === -0){
    return 0;
  }
  return inverse;
}

// This will convert the argument(number) passed into a decimal
const convertPercentageToDecimal = (percentNum) => {
  if(typeof percentNum !== 'number'){
    return `please enter a different number and try again`;
  }

  const convertedDec = percentNum * .01;
  return convertedDec;
}

// This will get a random whole number(integer) that is between the two arguments(numbers) passed
const getRandomInteger = (min, max) => {
  if(typeof min !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof max !== 'number'){
    return `please enter a different number and try again`;
  }
  if(min === undefined){
    min = 1
  }
  if(max === undefined){
    max = 100
  }
  const integer = Math.floor(Math.random() * (max-min)) + min;
  return integer;
}

// This will return 3.14 if pi is passed as the argument
const getPi = (piNum) => {
  if(piNum === `pi`){
  return 3.14;
  } else {
    return `pi not selcted`
  }
}

// This will get the remainder of the two arguments(numbers) passed
const getRemainder = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const remainder = firstNum % secondNum;
  return remainder;
}

// This will get the square root of the argument(number) passed
const getSquareRoot = (firstNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  const squareRoot = Math.sqrt(firstNum);
  return squareRoot;
}

// now i am going to test working functions together
const inverseTheSum = (firstNum, secondNum) => {
  if(typeof firstNum !== 'number'){
    return `please enter a different number and try again`;
  }
  if(typeof secondNum !== 'number'){
    return `please enter a different number and try again`;
  }
  sum = getSum(firstNum, secondNum);

  return inverseNum(sum);
}
// console.log(inverseTheSum(10, 20)); it workeds!