// 입력 
    // 0또는 1의 정수 배열 arr
    // 정수 idx
// 출력
    // 정수
// 작업
    // idx보다 큰 인덱스 중에서 값을 1을 가지는 가장 가까운 인덱스 구하기

// 예시
    // idx 이후에 값이 1인 인덱스가 없다면 -1 반환
        // idx 이후 값을 정렬하여 마지막 값에 1이 있다면 idx 찾기 진핸
        // 1이 없다면 -1 반환

// 방법
    // i = idx+1
    // arr[i] === 1 확인
    // i++

function solution(arr, idx) {
    if(arr.slice(idx).filter(num=>num===1).length === 0 ) return -1;
    
    return arr.slice(idx).findIndex(num =>num===1) + idx
    
    
    
}