// 입력
    // 문자열 my_string
    // 문자열 alp
// 출력
    // 문자열
// 작업
    // my_string에 존재하는 alp를 모두 대문자로 변경하기

function solution(my_string, alp) {
    return my_string.replaceAll(alp,alp.toUpperCase());
}