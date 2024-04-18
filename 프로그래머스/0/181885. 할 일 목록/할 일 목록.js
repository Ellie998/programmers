// 입력
    // 문자열 배열 todo_list
    // boolean 배열 finished
// 출력
    // 문자열 배열
// 동작
    // finished에서 값이 false인 인덱스에 해당하는 todo_list 문자열 값들로 배열 만들기

// false인 인덱스 찾기
    // 모든 값에 접근해봐야 함
    
// 방법
    // finished를 순회하며 값이 false일 때 해당 인덱스를 사용해 todo_list의 값을 result 배열에 push한다.

function solution(todo_list, finished) {
    const result = [];
    
    finished.forEach((val,i)=>{
        if(val===false) result.push(todo_list[i]);
    })
    
    return result;
}