// 입력
    // 정수 리스트 num_list
    // 정수 n
// 출력
    // 정수 리스트
// 동작
    // num_list의 첫번째 원소부터 마지막 원소까지 n개 간격으로 저장한 배열 만들기

// 예시
    // n이 1이면 return num_list
    // n이 1이 아니면 i=0부터 i가 num_list.length보다 작을 때까지 num_list[n*i]를 result에 저장해 return


function solution(num_list, n) {
    const answer = [];
    let i = 0;
    
    if(n===1) return num_list;
    
    while(n*i < num_list.length){
        answer.push(num_list[n*i]);
        i++;
    }
    return answer;
}