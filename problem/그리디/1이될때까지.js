// 1이 될 때까지 N에서 1을 뺀다. N이 K로 나누어떨어질 때에는 N을 K로 나눈다.
// N을 1으로 만드는 최소 횟수를 구하라
function solution(n, k) {
  let answer = 0;
  let temp_n = n;

  while (temp_n !== 1) {
    if (temp_n % k === 0) temp_n = Math.floor(temp_n / k);
    else temp_n--;
    answer++;
    console.log(temp_n);
  }

  console.log(answer);
  return answer;
}

solution(25, 5); //2
