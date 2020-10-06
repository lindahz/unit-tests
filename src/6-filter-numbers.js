export const filterNumbers = (array, largerThan) => {
  const newArray = array.filter(item => item > largerThan);
  return newArray
}