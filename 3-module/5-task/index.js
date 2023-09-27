const getMinMax = (str) => {
  const numbersArr = str.split(' ')
        .filter((i)=> +i);
  const result = {
    min: Math.min.apply(null, numbersArr),
    max: Math.max.apply(null, numbersArr)
  }
  return result;

}
