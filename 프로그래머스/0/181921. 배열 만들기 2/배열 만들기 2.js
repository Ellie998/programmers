// 입력 : 정수 l, r
// 조건 : l <= r, l>= 1,  r<= 1,000,000
// 로직 : l이상 r이하의 정수 중에서 0과 5로만 이루어진 모든 정수 찾아 오름차순 정렬. 없으면 -1
// 결과 : l~r 사이의 정수 중, 0과 5로만 이루어진 모든 정수를 담은 배열을 return. 배열의 개수는 미정. 

// 접근
// 가능한 정수 값들 : 5, 50, 55, 500, 505, 550, 555, 5000, 5005, 5050, ...

// 해결책 1. l~r까지 순차적으로 접근하여 0과 5로만 이루어졌는지 각각 확인
// // O(n)
// // 장점 : 수가 작으면 금방 해결.
// // 단점 : 수가 크면 오래 걸림

// 해결책 2. 수학적 접근 : 가능한 정수 값들을 l~r 이하의 값들로 만들기. 가능한 정수 값을 저장하는 배열의 길이가 0이면 -1 저장
// // O(1)
// // 장점 : 시간복잡도 단축
// // 단점 : 공간복잡도 O(1) 존재

// // 가능한 정수 값들을 l~r 이하의 값들로 만드는 방법?
// // 가능한 정수 값을 담는 배열 arr에 현재 만들은 가능한 정수 값이 l~r 을 벗어나면 가능한 정수 값 생성을 중지
// // 가능한 정수 값은 5 * 1, 5 * 10 , 5*11, 5*100 , 5*101 ....
// // 5 * 1의 2진수 표현, 5 * 2의 2진수 표현, ....

function solution(l, r) {
    var answer = [];
    let num = 0;
    let i = 0;
    
    while(num <l){
        i++;
        num = Number(5 * Number(i).toString(2));
        
    }
    
    while(num>=l && num<=r){
        answer.push(num);
        i++;
        num = Number(5 * Number(i).toString(2));
    }
    
    
    return answer.length === 0 ? [-1] : answer;
}