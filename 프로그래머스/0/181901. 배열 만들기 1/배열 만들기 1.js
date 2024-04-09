// 입력
    // 정수 n, k
// 출력
    // 정수 배열
// 동작
    // 1 이상 n 이하의 정수 중에서 k의 배수를 구해 오름차순으로 정렬한다.

// 예시
    // n과 k가 1일 경우 -> return [1]
// 방법
    // 1
        // k가 n보다 작거나 같으면 answer에 push 후 val += k

function solution(n, k) {
    var answer = [];
    let sum = k;
    
    while(sum <= n){
        answer.push(sum);
        sum += k;
    }
    
    return answer;
}