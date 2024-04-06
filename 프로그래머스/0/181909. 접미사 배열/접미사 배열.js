// 입력
    // 문자열 my_string
// 출력
    // 문자열 배열
// 작업
    // my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 만든다. 
// 예시
    // my_string의 길이가 1일 경우 -> my_string 하나만 포함하는 배열 return
    // my_string의 길이가 n일 경우 -> n개의 문자열을 포함하는 배열 return


// 방법1
    // 0부터 my_string.length-1까지 i++를 하는 반복문을 실행한다.
    // my_string.slice(-i)를 answer에 push한다.



function solution(my_string) {
    var answer = [];
    
    for(let i = 0; i< my_string.length; i++){
        answer.push(my_string.slice(-i));
    }
    
    return answer.sort();
}