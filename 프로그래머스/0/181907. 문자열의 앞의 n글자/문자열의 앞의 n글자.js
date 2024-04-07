// 입력
    // 문자열 my_string
    // 정수 n
// 출력
    // 문자열
// 동작
    // my_string의 앞의 n글자로 이루어진 문자열 구하기

// 예시
    // my_string의 길이와 n이 같은 경우 -> my_string return
    // my_string 길이가 n보다 작은 경우 -> 경우 없음
    // my_string의 길이가 n보다 클 경우
    

function solution(my_string, n) {
    if(my_string.length === n) return my_string;
    return my_string.slice(0,n);
    
}