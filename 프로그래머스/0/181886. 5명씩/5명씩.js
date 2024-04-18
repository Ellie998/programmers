// 입력
    // 문자열 리스트 names
// 출력
    // 문자열 리스트
// 작업
    // 문자열 리스트에서 5명씩 묶은 그룹의 가장 첫 번째 요소만을 이용해 배열 만들기

// 방법 1
    // names를 순회하며 5번째인 원소로 새로운 배열 만들기 -> O(n)
// 방법 2
    // names에서 5번째인 원소들에만 접근하기 O(n/5)

function solution(names) {
    var answer = [];
    let i = 0;
    
    while(i<Math.ceil(names.length/5)){
        answer.push(names[i*5]);
        i++;
    }
    
    return answer;
}