// 입력
    // 정수 리스트 num_list
// 출력
    // 정수
// 동작
    // num_list의 홀수번째 원소들의 합과 짝수 번째 원소들의 합을 구하기

// 접근
    // 방법 1: num_list를 순차 접근하여 홀수와 짝수 인덱스의 값을 누적해 더하기
    // 방법 2: num_list를 idx=0부터 idx=num_list/2까지 [2*idx,2*idx+1] 으로 값을 누적해 더하기
        // 시간복잡도 방법 1의 1/2



function solution(num_list) {
    // idx, sum 선언
    // let idx = 0;
    const sum = [0,0];
    
    // while(idx<Math.round(num_list.length/2)){
    //     const [odd, even] = [num_list[idx*2], num_list[idx*2+1]]
    //     [sum[0],sum[1]] = [sum[0] + odd, sum[1] + even];
    //     idx++;
    // }
    
    num_list.forEach((num,i)=>{
        if(i%2 === 1){
            sum[1] += num;
        } else {
            sum[0] += num;
        }
    })
    return sum[0]===sum[1]? sum[0]: Math.max(...sum);
}