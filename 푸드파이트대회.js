function solution(food) {
  // i번 음식의 수를 2로 나눈 몫만큼 i번을 반복한다.
  let answer = [];

  for (let i = 1; i < food.length; i++) {
    let num = Math.floor(food[i] / 2);

    while (num !== 0) {
      answer.push(i + "");
      num--;
    }
  }
  // 배열을 뒤집어 배열+ 0 + 뒤집은 배열을 한다.
  let tempAnswer = [...answer];
  tempAnswer.reverse();
  answer.push("0", ...tempAnswer);
  console.log(answer.join(""));
  return answer.join("");
}

solution([1, 3, 4, 6]); //"1223330333221"
solution([1, 7, 1, 2]); //"111303111"
