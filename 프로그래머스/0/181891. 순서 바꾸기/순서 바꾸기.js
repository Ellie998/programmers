// 입력
    // 정수 리스트 num_list
    // 정수 n
// 출력
    // 정수 리스트 
// 작업
    // n번째 이후의 원소들을 num_list 앞에 붙이기

// 예시
    // n이 num_list.length와 동일하면  
        // 가장 마지막 요소를 잘라 맨 앞으로 보낸다.
    // n이 1일 경우
        // 가장 처음 요소를 맨 뒤로 보낸다.

    
function solution(num_list, n) {
    var answer = [];
    answer.push(...num_list.splice(n));
    answer.push(...num_list);
    return answer;
}