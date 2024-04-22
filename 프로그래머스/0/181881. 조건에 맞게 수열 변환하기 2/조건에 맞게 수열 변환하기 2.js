// 입력
    // 정수 배열 arr
// 출력 : 정수
// 작업
    // arr의 원소 num이 50보다 크거나 같은 짝수면 2로 나눔. 50보다 작은 홀수라면 2를 곱하고 다시 1을 더함
    // 위 과정을 x번 반복하여 arr(x) = arr(x+1)인 x 중 가장 작은 값 return

// 접근
    // arr를 변화시킨 결과를 저장할 배열 변수 arrChanged와 작업 반복 횟수를 저장할 변수 i 선언
    // arrChanged의 각 원소에 접근하여 해당하는 연산을 수행하고, 수행한 결과를 arrNext 배열에 저정. 
    // arrChanged 배열과 arrNext 배열이 같으면 i를 return

function solution(arr) {
    let answer = 0;
    
    while(true){
        const changedArr = [...arr];
        arr = arr.map((num)=>{
            if(num>=50 && num%2===0) return num/2;
            else if(num < 50 && num%2===1) return num*2 + 1;
            else return num;
        });

        
        if(isSame(changedArr, arr)) break;
        answer++;
                                
    }
    
    return answer;
}

function isSame(arr1, arr2){
    const cnt = arr1.reduce((cnt,_,i)=>arr1[i]===arr2[i]?++cnt:cnt,0);
    return cnt === arr1.length? true :false
}