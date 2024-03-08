// 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임
// 카드는 N X M 형태로 놓여져 있다.
// 행을 고르면 그 행 중에서 가장 낮은 숫자가 적인 카드가 뽑힌다.

function solution(n, m, arr) {
  let answer = 0;

  arr.forEach((row) => {
    row.sort();
    if (answer < row[0]) answer = row[0];
  });

  console.log(answer);
  return answer;
}

solution(3, 3, [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
]); // 2
solution(2, 4, [
  [7, 3, 1, 8],
  [3, 3, 3, 4],
]); //3
