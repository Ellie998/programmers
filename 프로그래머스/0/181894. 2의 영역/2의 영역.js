// 입력
    // 정수 배열 arr
// 출력
    // 정수 배열
// 작업
    // 배열 안에 2가 포함된 가장 작은 연속된 부분 배열 찾기
    // 찾아진 배열이 없으면 -1을 return

// 예시
    // [3,2,1,2,5] // [2,1,2]
    // [3,2,2,1,2] // [2,2,1,2]
    // [3,2,1,1,1] // [-1]
    // [1,1,1] // [-1]

// 방법
    // 배열에 2가 없으면 [-1] 리턴
    // 배열에 2가 하나 있으면  [-1] 리턴
    // 배열에 2가 있는 인덱스를 저장 후 다음 2를 값으로 가지는 인덱스 찾기
        // indexOf의 시간 복잡도는 최악일 경우 O(100,000)
    // 인덱스 배열의 0번과 인덱스 배열의 -1번의 값을 기준으로 arr를 slice

function solution(arr) {
//     let idx = 0;
//     const idxs = [];
    
//     while(idx < arr.length){
//         if(arr.indexOf(2,idx+1)===-1) break;
//         idx = arr.indexOf(2,idx+1);
//         idxs.push(idx);
//     }
    
//     if(idxs.length ===0) return [-1];
//     return arr.slice(idxs[0], idxs[idxs.length-1] + 1);
    
    
    // 최초 2와 최종 2의 인덱스를 저장
    const idx = { start:null, end:null};
    
    for(let i=0; i< arr.length; i++){
        const num = arr[i];
        
        if(num === 2){
            if(idx.start === null) {
                idx.start = i;
                continue;
            }
            idx.end = i;
        }
    }
    
    if(idx.start === null) return [-1];
    if(idx.end === null) return [2];
    return arr.slice(idx.start, idx.end+1);
    
}