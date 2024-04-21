// 입력
    // 정수 배열 arr
// 출력
    // 정수 배열 
// 작업
    // arr의 각 원소에 접근하여 50보다 크거나 같은 짝수면 /2, 50보다 작은 홀수면 *2를 하여 다시 저장

// 접근
    // arr의 모든 원소에 접근해야 한다. 
    // arr의 원소에 대해 작업을 진행하고 그 값으로 arr의 값을 변경해야 한다.
    // 따라서 arr의 값과 인덱스가 필요하다.
    // 그리고 arr를 변경시킨 결과를 출력해야 한다. 
    // map을 사용하면 arr의 값과 인덱스 모두 편리하게 접근 가능하고 값을 변경하여 결과를 출력할 수 있다. 


function solution(arr) {
    return arr.map((num, idx)=>{
        if(num >= 50 && num %2 ===0) return num/2;
        else if (num < 50 && num %2 ===1) return num *2;
        else return num;
    })
    
}