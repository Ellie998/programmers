// 입력
    // 정수 start_num, end_num
// 출력
    // 정수 배열
// 작업
    // start_num에서 end_num까지의 값들을 구해 배열을 저장한다.

// 예시
    // start_num === end_num일 경우 -> 배열에 start_num을 담아 return
    // start_num < end_num일 경우
// 방법 1
    // 반복문 사용 -> 동작이 명확하게 보일 것임
    // 배열을 만든 뒤, forEach를 사용해 배열에 값을 지정하기 -> 코드가 간결해질 것임


function solution(start, end_num) {
    return new Array(start-end_num+1).fill(start).map((num,i)=>num-i)
    // const result = [];
    // for(let i=start; i>=end_num; i--){
    //     result.push(i)
    // }
    // return result;
}