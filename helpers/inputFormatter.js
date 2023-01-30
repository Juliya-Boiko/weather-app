export const inputFormatter = (str) => {
  const strArr = str.trim().split(' ');
  const formattedArr = strArr.map(item => `${item[0].toUpperCase() + item.slice(1)}`);
  const formattedStr = formattedArr.join(' ');
  return formattedStr;
};