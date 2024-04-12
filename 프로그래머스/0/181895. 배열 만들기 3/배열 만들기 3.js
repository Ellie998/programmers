// 입력
    // 정수 배열 arr
    // 2차원 2개의 값을 가지는 정수 배열 intervals
// 출력
    // 1차원 정수 배열 
// 작업
    // intervals[0][0]~intervals[0][1], intervals[1][0]~intervals[0][1]에 해당하는 값을 찾아 배열 만들기

// 방법
    // a1부터 b1까지 값의 배열을 만들어 원소들을 result에 push
    // a2부터 b2까지 값의 배열을 만들어 원소들을 result에 push
    

function solution(arr, intervals) {
    var answer = [];
    
    for(const [a,b] of intervals){
        answer.push(...arr.slice(a,b+1))
    }
    
    
    return answer;
}