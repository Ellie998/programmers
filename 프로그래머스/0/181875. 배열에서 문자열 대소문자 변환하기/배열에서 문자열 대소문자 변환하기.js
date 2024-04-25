// 입력
    // 문자열 배열 strArr
// 출력
    // 문자열 배열
// 작업
    // 문자열 배열에서 홀수번째 문자열은 대문자로, 짝수번째 인덱스는 소문자로 변환하기

// 접근
    // myString의 모든 원소에 접근
    // 인덱스가 짝수인지 홀수인지에 따라 기능 구현

function solution(strArr) {
    return strArr.map((str,idx)=>{
        if(idx%2===0) return str.toLowerCase();
        return str.toUpperCase();
    });
}