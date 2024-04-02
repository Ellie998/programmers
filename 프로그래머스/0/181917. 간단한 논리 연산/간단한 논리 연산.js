// 입력 : boolean 변수 x1, x2, x3, x4
// 출력 : boolean 값
// 로직 : 제공된 식((x1 ∨ x2) ∧ (x3 ∨ x4))의 결과 값
    // x ∨ y : x || y 
    // x ∧ y : x && y
    // (x1 || x2) && (x3 || x4)

// 예시
    // 0,1,1,1 => (0 || 1) && (1||1) => true
// 해결 방법
    // 주어진 식을 거친 결과값을 return한다.
function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4)
}