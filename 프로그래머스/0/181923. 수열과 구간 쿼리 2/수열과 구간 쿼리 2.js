// 문제 파악
// 입력 : 1. 정수 배열 arr 2. 2차원 정수 배열 queries. [s,e,k] 꼴의 query로 구성
// 로직 : 각 query마다 s ~ e 사이의 값인 모든 i에 대해 k보다 크면서 가장 작은 arr[i] 찾기
// 출력 : 각 query를 돌며 얻은 가장 작은 arr[i]을 담을 배열. arr[i]를 찾지 못하면 -1 반환


// 접근
// 1. queries의 각 query들을 모두 접근해야 하는가? YES
// 2. 각 쿼리들마다 arr 배열 요소를 모두 접근해야 하는가? arr[s]~arr[e] 사이만 접근하면 된다. 사이의 값들을 정렬하여 k값보다 작으면 다음 요소에 접근,
// -> 최악의 경우 arr의 끝까지 k 값보다 작은 요소가 없을 수 있다. 
// -> arr의 가장 큰 값이 k값보다 작다면 바로 -1 return
// ? 앞에서부터 순차적으로 접근하는 것이 좋을까, 다른 탐색 방법을 찾는 것이 좋을까?
// 앞에서부터 순차적으로 접근하면 k값이 작을 때(arr[s]에 가까운 값일 때) 유용
// 가운데 값부터 접근하며 가장 작은 값을 찾아 나서면 어떤 경우든 가장 적절한 속도를 가지게 될 것
// 혹은 arr를 k 보다 큰 값들로만 filter한 뒤 가장 첫 요소만 가져오기


// 로직
// arr[s]~arr[e]의 배열을 뽑아낸 뒤 오름차순 정렬한다.
// arr[e]의 값이 k보다 작으면 -1을 return한다.
// 정렬된 arr[s]~arr[e]를 k보다 큰 값만 filter
// 가장 첫 요소 출력

function solution(arr, queries) {
    const answer = [];
    
    for(const [s,e,k] of queries){
        const selected = arr.slice(s,e+1);
        
        selected.sort((a,b)=>a-b);
        
               
        if(selected[selected.length-1] <= k) {
            answer.push(-1)
            continue;
        }
        
        
        const filtered = selected.filter((num)=>num>k);
        
        answer.push(filtered[0])
        
    }
    
    return answer;
    
}