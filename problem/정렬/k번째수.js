function solution(array, commands) {
  const result = [];
  //     array에서 command[i][0]의 값부터 command[i][1]까지 자른다.
  //     자른 배열을 정렬한다.
  //     정렬한 배열의 command[i][2] 값을 result[i]에 저장한다.

  for (let i = 0; i < commands.length; i++) {
    const temp = array.slice(commands[i][0] - 1, commands[i][1]);
    if (temp.length < commands[i][2]) {
      result[i] = null;
      continue;
    }
    temp.sort((a, b) => a - b);

    result[i] = temp[commands[i][2] - 1];
  }
  return result;
}
// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// ); //[5, 6, 3]
console.log(solution([10, 2], [[1, 2, 1]])); //[2]
