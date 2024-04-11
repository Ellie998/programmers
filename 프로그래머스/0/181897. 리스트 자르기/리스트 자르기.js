// 입력
    // 정수 n
    // 정수 3개가 담긴 리스트 slicer
    // 정수 여러개가 담긴 리스트 num_list
// 출력
    // 정수 리스트
// 작업
    // 정수 n에 따라서 num_list의 값을 슬라이싱한다.
        // n=1, num_list 0~ slicer[1]
        // n=2, num_list slicer[0]~
        // n=3, num_list slicer[0]~slicer[1]
        // n=4, num_list slicer[0]~slicer[1] slicer[2] 간격으로

// 접근
    // n에 따라 코드 분류
    // 해당되는 n의 코드를 작성



function solution(n, slicer, num_list) {
    let start, end;
    let diff = 1;
    switch (n) {
        case 1:
            start = 0;
            end = slicer[1];
            break;
        case 2:
            start = slicer[0];
            end = num_list.length - 1;
            break;
        case 3:
            start = slicer[0];
            end = slicer[1];
            break;
        case 4:
            start = slicer[0];
            end = slicer[1];
            diff = slicer[2];
            break;
        default:
    }
    
    if(diff===1) return num_list.slice(start,end+1)
    
    const answer = [];
    for(let i=start; i<=end; i=i+diff){
        answer.push(num_list[i])
    }
    return answer
}