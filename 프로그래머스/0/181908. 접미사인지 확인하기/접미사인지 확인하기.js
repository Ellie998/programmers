// 입력
    // 문자열 my_string
    // 문자열 is_suffix
// 출력
    // boolean
// 동작
    // is_suffix가 my_string의 접미사인지 확인한다.

// 접근
    // 방법1
        // my_string의 접미사를 찾는다.
        // my_string의 접미사에 is_suffix가 존재하는지 확인한다.
    // 방법 2
        // is_suffix의 index를 찾는다.
        // index+is_suffix의 길이가 my_string의 길이와 같은지 확인한다.
    // 방법 3
        // is_suffix와 my_string을 뒤집어서 is_suffix의 index가 0부터 시작하는지 확인한다.
// 예시
    // my_string의 길이보다 is_suffix의 길이가 긴 경우 -> false
    // my_String의 길이와 is_suffix의 길이가 같은 경우 -> 같은 문자열인지 확인
    // my_string의 길이보다 is_suffix의 길이가 작은 경우 -> 접미사인지 확인


function solution(my_string, is_suffix) {
    let answer;
    const my_length = my_string.length;
    const is_length = is_suffix.length;
    
    if(my_length < is_length) return 0;
    if(my_length === is_length) {
        my_string === is_suffix ?  answer = 1: answer = 0;
        return answer;
    }
    
    const rev_my = [...my_string].reverse().join('');
    const rev_is = [...is_suffix].reverse().join('');
    
    rev_my.indexOf(rev_is) === 0 ? answer = 1 : answer = 0;
    
    return answer;
}