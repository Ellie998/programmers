// 입력
    // 정수 리스트 num_list
    // 정수 n
// 출력
    // 정수 리스트
// 작업
    // num_list의 첫번째 원소부터 n번째 원소까지의 모든 원소를 담은 리스트

// 예시
    // n===num_list.length이면 num_list를 return
    // n!==num_list.length이면 num_list.slice(0,n+1) return

function solution(num_list, n) {
    if(n===num_list.length) return num_list;
    return num_list.slice(0,n);
}