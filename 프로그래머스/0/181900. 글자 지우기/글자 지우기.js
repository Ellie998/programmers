// 입력
    // 문자열 my_string
    // 정수 배열 indices
// 출력
    // 문자열
// 동작
    // indices의 원소에 해당하는 인덱스의 글자를 지우고 이어붙인 문자열을 return

// 방법 1
    // indices를 오름차순 정렬한다 O(n)
    // my_string을 순회하며 indices의 원소와 동일하지 않은 인덱스에 해당하는 문자열만 answer에 push O(n)
// 방법 2
    // indices를 오름차순 정렬한다 O(n)
    // indices의 원소 사이의 값으로 추출할 인덱스 값을 파악하여 push -> 포인터용 추가적인 변수 필요
// 방법 3
    // indices를 내림차순 정렬한다.
    // indices를 순회하며 인덱스에 해당하는 문자열을 제거

function solution(my_string, indices) {
    const arr = [...my_string];
    
    indices.sort((a,b)=>b-a)
    
    indices.forEach((idx)=>{
        arr.splice(idx,1);  
    })
    return arr.join('')
}