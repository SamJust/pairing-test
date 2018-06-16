function counter (arr, targetValue) {
  let count = 0;
  for (let item of arr){
    if(item === targetValue) count++;
  }
  return count;
}

module.exports = (arr) => {
  let checkedNumbers = [];
  for(let item of arr){
    if(checkedNumbers.indexOf(item) !== -1 ) continue;
    else checkedNumbers.push(item);
    if(counter(arr, item) % 2 === 1) return item;
  }
};
