// 입력
    // 알파벳으로 이루어진 문자열 myString, pat
// 출력
    // 0 또는 1
// 작업
    // myString 문자열에 pat 문자열이 있는지 확인하여 존재하면 1, 존재하지 않으면 0을 return한다

function solution(myString, pat) {
    return Number(myString.toLowerCase().includes(pat.toLowerCase()))
    
}