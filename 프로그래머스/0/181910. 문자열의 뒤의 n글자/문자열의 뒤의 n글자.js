// 입력
    // 문자열 my_string
    // 정수 n
// 출력
    // n 글자의 문자열
// 작업
    // my_string의 뒤 n글자로 이루어진 문자열 구한 뒤 return

// 예시
    // my_string의 길이보다 n이 큰 경우
        // 제한 사항에 의해 불가
    // my_string의 길이와 n이 동일한 경우 
        // my_string을 그대로 return
    
// 동작
    // my_string의 길이와 n이 동일하면 my_string을 그대로 return한다.
    // 동일하지 않다면 my_string의 뒤 n글자를 return한다.
        // 방법 1. my_string.slice(my_string.length-n-1,my_string.length)
        // 방법 2. for문을 사용해 my_string.length-n-1 부터 my_string.length까지 my_string 배열에 접근하여 결과 값을 만든다.
    //-> 방법 1이 더 직관적이다
    //   slice 메서드의 시간 복잡도도 O(n)
function solution(my_string, n) {
    const length = my_string.length;
    
    if(length === n) return my_string;
    return my_string.slice(length-n,length);
}