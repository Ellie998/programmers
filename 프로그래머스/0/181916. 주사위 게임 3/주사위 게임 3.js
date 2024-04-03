// 입력 : 정수 a, b, c, d (주사위 4개를 굴린 각각의 값)
// 출력 : 정수값 (얻은 점수)
// <얻은 점수 계산 방법>
    // 모두 같으면 -> 1111 * 나온값
    // 세 개가 같으면 -> (10 * 같은 값 + 다른 값) 제곱
    // 두개 두개씩 같으면 -> (p + q) * |p - q|
    // 두개 같고 남은 두개(q, r) 다르면 -> q * r
    // 모두 다르면 -> 가장 작은 값
// 접근
    // 결과 값을 저장할 정수 변수를 선언
    // 같은 값이 어떻게 분포하는지 분석 && p, q, r을 선언하여 각 값을 저장
        // 방법 1: switch case
        // 방법 2: map 사용
        // ? 리팩토링 : 함수를 만들까 바로 구할까
    // 같은 값이 어떻게 존재하는지에 따라서 결과 값 계산
        // ? 리팩토링 : 각각의 함수를 선언할까 혹은 그냥 바로 식을 작성할까
    // 결과 값 출력

function solution(a, b, c, d) {
    
    // map을 생성하여 동일한 값이 존재하면 cnt를 1 증가시킨다(key의 값)
    const map = new Map();
    [a,b,c,d].forEach((num)=>{
        map.get(num) ? map.set(num, map.get(num) +1):map.set(num,1)
    })
    const values = [...map.values()]
    const keys = [...map.keys()];

    
    // map에 존재하는 값의 개수에 따라서 로직을 작성한다.
    switch (map.size){
        case 1: 
            return 1111*a;
        case 2: 
            let p = keys[0];
            let q = keys[1];
            
            if(values[0]===3) {
                return Math.pow(10*p + q,2);
            }
            
            if(values[0]===1){
                [p,q] = [q,p];
                return Math.pow(10*p + q,2);
             }
            
            return Math.abs((p+q)*(p-q));
        case 3 : 
            
            return values.reduce((answer,num,i)=>{
                if(num===2) return answer;
                return answer * keys[i]
            },1)
            
            
        case 4 :
            return Math.min(a,b,c,d)
            
    }
    
    
}