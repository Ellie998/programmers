// 입력 
    // 정수 배열 arr
    // 정수 배열 query
// 출력
    // 정수 배열 
// 작업
    // query가 짝수 인덱스일 때는 해당하는 값을 arr의 index로 사용해 idx 이후의 값 버림
    // query가 홀수 인덱스일 때는 해당하는 값을 arr의 index로 사용해 idx 이전의 값 버림

// 예시
    // query가 [1] length가 1 -> arr.splice(1,arr.length-1)
    // query가 [1,2] length가 2 -> arr.splice(1,arr.length-1).slice(2)
    // query가 [1,2,3] -> arr.splice(1,arr.length-1).slice(2).splice(3,length-1)

// 방법
    // 짝수일 때 동작과 홀수일 때 동작을 구분하여 구현한다.

function solution(arr, query) {
    query.forEach((idx,i)=>{
        if(i%2===0){
            arr.splice(idx+1);
        } else {
        arr.splice(0,idx);
        }
    })
    return arr
}