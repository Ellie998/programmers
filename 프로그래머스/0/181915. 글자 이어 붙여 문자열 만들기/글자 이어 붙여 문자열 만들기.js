// 입력
    // 문자열과 정수 배열
// 출력
    // 문자열
// 작업
    // 문자열에서 정수 배열의 각 정수들을 인덱스로 사용해 순서대로 이어 붙여서 새로운 문자열을 만든다.

// 가능한 상황
    // 문자열에 숫자나 기호, 공백은 어떻게 다루어야 하는가 X
    // 정수 배열이 제공하는 값이 문자열의 총 길이보다 긴 경우에는 어떻게 해야 하는가 X

// 불가능한 상황
    // 문자열이 아닌 배열이나 객체, 숫자 값 등이 입력될 경우 X
    // 문자열이 ''으로 들어올 경우 X
    // 정수 배열에 정수가 아닌 값이 저장되어 있을 경우 
    // 정수 배열에 아무런 정수 값이 들어있지 않을 경우 X

// 접근
    //my_string 문자열은 배열로 다룰 수 있다.
    // index_list의 배열을 순차적으로(0부터 index_list.length-1까지) 접근하면서 idx에 해당하는 문자열을 찾는다.
    // 찾은 문자열을 결과 str에 붙인다.

function solution(my_string, index_list) {
    var answer = '';
    for(let idx=0; idx <index_list.length;idx++){
        answer += [...my_string][index_list[idx]]
    }
    return answer;
}