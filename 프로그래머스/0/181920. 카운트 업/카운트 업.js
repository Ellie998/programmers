// 입력 : 정수 start_num, end_num
// 조건 : 0~50의 수, s_n <= e_n
// 알고리즘 : s_n ~ e_n 까지의 숫자를 차례로 담은 리스트 만들기
// 출력 : 정수 배열

// 접근
// s_n 부터 시작하여 e_n까지 값을 1씩 증가시켜 숫자를 리스트에 저장한다.

function solution(start_num, end_num) {
    var answer = [];
    for(let i=start_num; i<=end_num; i++){
        answer.push(i);
    }
    return answer;
}