function solution(arr) {
  let repeatNum;
  return arr.filter((element) => {
    if (element === repeatNum) return false;

    repeatNum = element;
    return true;
  });
}
console.log(
  solution([1, 1, 3, 3, 0, 1, 1]) //[1, 3, 0, 1]
);
console.log(
  solution([4, 4, 4, 3, 3]) //[4, 3]
);
