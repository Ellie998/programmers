// 입력
    // 정수 리스트 num_list
// 출력
    // 정수
// 동작
    // 첫 번째로 나오는 음수 인덱스 찾기. 음수가 없으면 -1 return

// 방법
    // num_list를 오름차순 정렬 
    // 최솟값이 음수가 아니면 -1 리턴
    // 최솟값이 음수면 첫 번째로 나오는 음수 인덱스 찾기
        // 방법 1 -> findIndex해서 가장 작은 인덱스를 return
            // 가장 작은 인덱스를 구하는 시간 복잡도 O(n) .. 음수 인덱스 수에 따라 다름..
            //... 배열에 음수가 많을 경우 비효율적
        // 방법 2 -> num_list를 처음부터 끝까지 순회 O(n)
    // num_list가 될 수 있는 값이 -10~100이므로 음수가 될 수 있는 값의 범위가 더 적음. 그러니 음수 수가 더 적으리라 판단하여 방법 1을 선택

function solution(num_list) {
    const sortAndFiltered = [...num_list].sort((a,b)=>a-b).filter(num=>num<0);
    
    if(sortAndFiltered.length===0) return -1;
    
    return sortAndFiltered.reduce((min, num)=>{
        if(num_list.indexOf(num) < min) min = num_list.indexOf(num);
        return min
    },Infinity)
    
}