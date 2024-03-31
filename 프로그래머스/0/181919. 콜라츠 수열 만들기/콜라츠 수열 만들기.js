// 입력 : 양의 정수 n (1 <= n <= 1,000)
// 출력 : 정수 배열
// 로직 : 콜라츠 수열 (값이 짝수이면 2로 나누고, 홀수이면 3을 곱한 뒤 1을 더한다. 이 과정을 반복하면 값이 결국 1이 된다. 처음 시작된 값에서 1으로 변하는 과정을 기록한 수열)

// 접근
// n이 1이면 반복문을 멈춘다.
// 반복문
// // 짝수, 홀수로 나누어 값을 구해 콜라츠 수열에 저장한다.

function solution(n) {
    var answer = [];
    let num = n;
    answer.push(num);
    
    
    while(num!==1){
        if(num%2 === 0)  {
            num /=2;
        } else {
            num = 3*num + 1;
        }
        answer.push(num);
    }
    
    return answer;
}