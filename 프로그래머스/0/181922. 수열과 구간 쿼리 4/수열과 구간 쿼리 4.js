// 입력 : 1. 정부 배열 arr, 2. [s,e,k] 형태의 query로 이루어진 2차원 정수 배열 queries
// 로직 : 각 쿼리에 대해 i(s<=i<=e)가 k의 배수이면 arr[i]에 1을 더한다.
// 출력 : arr

// 접근 : queries의 query를 모두 순차적으로 돌아야 한다 

function solution(arr, queries) {
    queries.forEach(([s,e,k])=>{
        let i = s;
        while(i<=e){
            if(i % k === 0)  arr[i] += 1 ;    
            i++;
        }
    })
    
    return arr;
}