// 입력
    // 정수 배열 arr
    // 2차원 정수 배열 queries
// 출력
    // 정수 배열
// 방법 1
    // queries에 순차 접근하며 queries의 s와 e에 접근한다.
    // s부터 e까지 수를 인덱스로 사용하여 arr값을 변경한다.
// s와 e가 같으면 s에 해당하는 arr만 +1

function solution(arr, queries) {
    queries.forEach(([s,e])=>{
        if(s===e){ arr[s]+=1;}
        else {
            let i = s;
            while(i<=e){
                arr[i]+=1;
                i++;
            }
        }
    })
    return arr
}