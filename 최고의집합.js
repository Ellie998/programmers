function solution(n, s) {
  var answer = [];
  let maxMul = 1;
  let tempAnswer = [];
  // n 횟수만큼 forloop을 생성하는 함수를 생성.
  // for loop를 n번 중첩해 실행하여 합이 s인 n개의 원소로 이루어진 집합을 찾는다.
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i + j === s) answer.push([i, j]);
    }
  }

  // 집합을 이루는 원소의 곱이 가장 큰 집합을 찾아 return한다.
  if (answer.length === 0) return -1;

  for (let i = 0; i < answer.length; i++) {
    let tempMul = 1;
    let tempArr = answer[i];
    for (let j = 0; j < n; j++) {
      tempMul *= answer[i][j];
    }
    if (tempMul > maxMul) {
    }

    if (i === answer.length - 1) {
      //마지막 집합이면
      //
    }
  }

  console.log("result", answer);
  return answer;
}

solution(2, 9);
solution(2, 1);
solution(2, 8);
