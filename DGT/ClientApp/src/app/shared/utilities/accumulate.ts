export const accumulate = (numberArray: number[]): number => {
  if (!numberArray[0]) { numberArray.push(0); }
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  return numberArray.reduce(reducer);
};
