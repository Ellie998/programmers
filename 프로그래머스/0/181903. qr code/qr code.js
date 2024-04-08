// 입력
    // 정수 q, r
    // 문자열 code
// 출력
    // 문자열
// 동작
    // q로 나누었을 때 나머지가 r인 인덱스의 문자 찾기

// 방법
    // filter -> O(n)
    // reduce -> O(n)
    // i는 0부터 code.length/q까지 qi + r인 인덱스에 접근 -> O(n)

function solution(q, r, code) {
    return [...code].filter((_,i)=>i%q === r).join('')
}