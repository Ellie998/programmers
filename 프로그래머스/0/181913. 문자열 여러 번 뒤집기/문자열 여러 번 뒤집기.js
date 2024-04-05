// 분석
    // 입력
        // 문자열, 이차원 정수 배열
    // 출력
        // 문자열
    // 동작
        // 이차원 정수 배열에 순차적으로 접근한다.
        // 이차원 배열을 이루는 일차원 배열은 문자열의 인덱스 s부터 e까지를 뒤집으라는 정보이다.
        // 이차원 배열을 모두 순회하면 문자열을 뒤집은 결과를 출력한다.
// 접근
    // 예시
        // 문자열 길이가 1개이면 문자열을 그대로 반환한다.
        // 문자열 길이가 2개 이상이면 문자열을 뒤집는 로직이 필요하다. 
            // JS에는 string을 뒤집는 메서드가 존재함
            // 메서드를 사용하지 않는다면 
                // s와 e를 변경, s는 +1, e는 -1을 하면서 s>=e이면 변경 중지
    // 불가능한 경우
        // 제한사항에 의해 경우가 사라졌다.
function reverse(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function solution(my_string, queries) {
    if(my_string.length === 1) return my_string;
    const arr = [...my_string];
    
    for(let [s,e] of queries){
        while(s<e){
            reverse(arr,s,e);
            s++;
            e--;
        }
    }
    return arr.join('')
}