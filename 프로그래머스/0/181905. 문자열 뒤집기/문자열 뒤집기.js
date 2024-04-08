// 입력
    // 문자열 my_string
    // 정수 s, e
// 출력
    // 문자열
// 작업
    // my_string 문자열의 인덱스 s부터 인덱스 e까지를 뒤집은 문자열 구하기

// 예시
    // s === e이면 my_string 리턴
    // s !== e 이면 문자열 뒤집기

// 접근
// 문자열 뒤집기
    // 1
        // splice 메서드를 사용해 s부터 e까지 문자열을 뒤집은 문자열로 교체한다.
        // s~e까지 reverse한 문자열을 splice의 items 매개변수에 넣는다.
        // O(n)
    // 2
        // s부터 e까지 s+1, e-1을 하며 e<s일 때까지 값을 서로 교환한다.
        // O(n) 
        
function solution(my_string, s, e) {
    if(s === e) return my_string;
    let l = s;
    let r = e;
    const arr = my_string.split('');
    
    while(l<r){
        [arr[l],arr[r]] = [arr[r],arr[l]];
        l++;
        r--;
    }
    return arr.join('')
}

