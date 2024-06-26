// 새로운 배열 만들기
// 1. 입출력 분석
// // 입력 : 정수 배열 (arr, 1<= 길이 <= 100,000, 1<=정수<=100,000)
// // 출력 : 정수 배열 stk
// // 문제 : i를 0부터 증가시키며 stk가 비어있으면 arr[i]를 가장 앞에 추가 & i++
// // // 비어있지 않는데 마지막 원소가 arr[i]보다 작으면 sdk 뒤에 추가 & i++
// // // 비어있지 않는데 마지막 원소가 arr[i]보다 크거나 같으면 sdk 마지막 원소 제거

// // stk arr i
// // [] , [1,4,2,5,3], 0
// // [1] , , 1
// // [1, 4], , 2
// // [1], ,2
// // [1, 2], ,3
// // [1,2,5], , 4
// // [1,2] , , 4
// // [1,2,3], , 5
// 중복값
    // [2,2,1,5,3]
    // 중복값이 들어가도 같거나 큰 값이 sdk의 마지막에 있으면 제거한다는 조건에 의해 다루어짐
// empty input
    // [] -> 제한사항에 의해 생각하지 않아도 됨
// invalid input
    // [false, "1","hello"] -> 문제에 정수 배열이 주어진다고 하였으니 생각하지 않아도 됨

// 접근
// arr를 전부 돌아야 하는가? yes
// while문을 사용하는 것이 좋을까, arr 탐색 메서드를 사용하는게 좋을까?
// // while문이 좀 더 i의 증가에 따른 관계를 표현하기 명확할 것 같다. 
// // arr reduce 메서드를 사용하면 좀 더 간단한 코드가 될 것 같다. 

function solution(arr) {
    var stk = [];
    let i = 0;
    while(i!== arr.length){
        if(stk.length ===0 || stk[stk.length-1] < arr[i]){
            stk.push(arr[i]);
            i++;
            continue;
        } 
        stk.pop();
        
    }
    return stk;
}