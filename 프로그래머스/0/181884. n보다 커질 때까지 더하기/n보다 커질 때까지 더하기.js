// 입력
    // 정수 배열 numbers
    // 정수 n
// 출력
    // 정수
// 작업
    // numbers의 값들을 앞에서부터 더하다가 합이 n보다 커지면 더하기 중지, 지금까지 더한 원소들의 합을 return

// 방법 1
    // for문을 통해 numbers 배열에 저장된 값들의 합을 구한다. 그리고 합이 n보다 크면 반복문을 멈춘다.
   

function solution(numbers, n) {
    var answer = 0;
    
    for(let i = 0; i< numbers.length ; i++){
        answer += numbers[i];
        if(answer > n) break;
    }
    
    return answer;
}