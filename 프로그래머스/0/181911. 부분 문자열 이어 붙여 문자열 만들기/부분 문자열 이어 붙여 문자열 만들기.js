// 입력
    // 길이가 같은 문자열로 이루어진 배열 my_strings
    // 이차원 정수 배열 parts (원소 part는 [s,e] 형태)
// 출력
    // 문자열
// 동작
    // parts의 원소에 각각 순차적으로 접근한다. 
    // part의 index와 동일한 my_strings 배열의 문자열을 s부터 e까지 slice한다.
    // slice한 문자열을 이어 붙인다.

// 예시
    // my_strings원소의 길이가 1개일 경우 -> 0또는 1개의 길이를 잘라야 함. 동일한 로직 들어가면 된다.
    
// 진행
    // 방법 1. my_strings에 map 사용 -> 결과값 join
    // 방법 2. my_strings에 forEach 사용 or 반복분 사용 -> 결과 값 저장을 위한 변수 필요
    // 방법 3. my_strings에 reduce 사용 후 결과값 바로 return

function solution(my_strings, parts) {
    return my_strings.reduce((result,str,i)=>{
        const [s,e] = parts[i];
        return result += str.slice(s,e+1);
    },'');
}