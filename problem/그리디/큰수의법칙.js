// n개의 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
// 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.
// 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 간주한다.
function solution(n, m, k, arr) {
  let answer = 0;
  let count = 1;
  arr.sort();
  for (let i = 0; i < m; i++) {
    if (count % k === 0) answer += arr[n - 2];
    else answer += arr[n - 1];

    count++;
  }
  console.log(answer);
  return answer;
}

solution(5, 8, 3, [2, 4, 5, 4, 6]); // 46
