// 입력
    // 문자열 my_string
// 출력
    // 정수 배열
// 작업
    // 알파벳의 개수를 카운트하는 길이 52의 정수 배열

// 예시
    // my_string의 길이가 1이면 -> 존재하는 문자열에 해당하는 배열의 값이 1, 나머지는 모두 0

// 접근
    // 방법 1
        // my_string을 순회하며 map에 count한다.
        // map을 알파벳순으로 정렬한다.
        // 정렬한 map의 값들을 return한다. 값이 없으면 0으로 배열을 만들어 return
        // 'A'부터 'z'까지의 문자열을 정수로 변경해서 ++하며 배열 만들기 (65~90, 97~122)
    // 방법 2
        // map에 모든 문자열을 순서대로 저장해 놓는다.
        // my_string을 순회하며 map에 count한다.
        // 정렬한 map의 값들을 return한다.

function solution(my_string) {
    const map = new Map();
    
    for(let i = 65; i <= 90; i++){
        map.set(String.fromCharCode(i),0);
    }
    for(let i = 97; i <= 122; i++){
        map.set(String.fromCharCode(i),0);
    }
    
    
    for(let str of [...my_string] ){
        map.set(str, map.get(str) + 1);
    }
    
    return [...map.values()]
}