// 입력
    // 숫자 문자열 배열 intStrs
    // 정수 k, s, l
// 출력
    // 숫자 배열
// 작업
    // intStrs의 각 원소에 접근한다.
    // 원소의 s번 인덱스부터 s + l까지 잘라 정수로 변환한다.
    // 변환한 정수 값이 k보다 큰 값들을 담아 return한다.

function solution(intStrs, k, s, l) {
    const result = [];
     
    intStrs.forEach((str)=>{    
        const filtered = str.slice(s,s+l);
        if(+filtered > k) result.push(+filtered);
    });
    return result
}