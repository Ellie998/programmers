// 입력
    // 문자열 리스트 str_list
// 출력
    // 문자열 리스트
// 작업
    // 문자열 리스트에서 l이 먼저 나오면 l왼쪽의 문자열들을 return
    // r이 먼저 나오면 r오른쪽 문자열들 return
    // 둘 다 없으면 빈 리스트 return

// 방법 1
    // l과 r이 문자열에 포함되었는지 확인한다. -> O(n)
    // l과 r이 문자열에 포함되지 않았다면 빈 리스트를 return
    // l과 r의 인덱스를 비교한 작업 결과에 의해 문자열 return
// 방법 2
    // str_list를 순차적으로 접근하여 l또는 r이 발견되면 문자열 배열 return
    // 만약 반복문이 끝까지 실행되었으면 빈 배열 return 
    // l과 r이 없는 경우가 아니라면 방법 2가 n 이전에 끝날 가능성이 많음

function solution(str_list) {
    for(let i=0; i<str_list.length;i++){
        if(str_list[i] === 'l') {
            return str_list.slice(0,i);
        }
        if(str_list[i] === 'r') {
            return str_list.slice(i+1);
        }
    };
    return []
}