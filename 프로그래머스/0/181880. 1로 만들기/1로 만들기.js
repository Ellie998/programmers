// 입력
    // 정수 리스트 num_list
// 출력
    // 정수
// 작업
    // num_list 배열의 모든 원소를 1로 만들기 위해 필요한 나누기 연산의 횟수 구하기

// num_list를 순차적으로 모두 접근한다. 
// 각 원소들을 1으로 만들 때 까지 나누기 횟수를 누적한다.

function solution(num_list) {
    var answer = 0;
    
    num_list.forEach((num)=>{
        while(num!==1){
            if(num%2 ===0) num/=2;
            else num = (num -1)/2;
            answer++;
        }
        return;
    })
    
    return answer;
}