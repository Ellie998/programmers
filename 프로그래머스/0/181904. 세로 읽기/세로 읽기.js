// 입력
    // 문자열 my_string
    // 정수 m, c
// 출력
    // 문자열
// 작업
    // my_string을 m글자씩 구분한다.
    // c번째 열에 적힌 글자들을 찾아 join하여 return

// 예시
    // m, c이 1인 경우 -> return my_string 
    // m이 2, c가 1인 경우 -> my_string[2i]
    // m이 2, c가 2인 경우 -> my_string[2i + 1]
    // m이 3, c가 1인 경우 -> my_string[3i]
    // m이 3, c가 2인 경우 -> my_string[3i + 1]
    // m이 3, c가 3인 경우 -> my_string[3i + 2]

// my_string을 m글자씩 분리하고, c번째 열의 글자 찾기
    // 방법 1
        //  i는 0부터 my_string.length/m까지 my_string[mi + c-1] 를 배열에 저장한다.
        //  배열을 문자열로 만들어 return
        // O(1)
    // 방법 2
        // my_string을 순회한다. 0에서 시작하여 m-1번 인덱스가 되면 my_string에서 문자열을 잘라 c번째 글자를 찾아 배열에 저장한다. my_string 길이가 0일 때까지 반복한다.
        // 배열을 문자열로 합친 뒤 return
        // O(n)


function solution(my_string, m, c) {
    var answer = [];
    
    if(m===1) return my_string;
    
    for(let i=0; i < my_string.length / m; i++){
        answer.push(my_string[m * i + c - 1]);
    }
    
    return answer.join('');
}