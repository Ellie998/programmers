// 입력
    // 정수 리스트 num_list
    // 정수 n
// 출력
    // 정수 리스트
// 과정
    // num_list에서 n번째 원소부터 마지막 원소까지 원소를 담은 리스트를 return


function solution(num_list, n) {
    return num_list.slice(n-1);
}