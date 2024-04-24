// 입력
    // 정수 리스트 num_list
// 출력
    // 정수
// 작업
    // num_list의 길이가 11 이상인 경우, num_list의 모든 원소를 합하여 return한다. 
    // num_list의 길이가 10 이하인 경우, num_list의 모든 원소를 곱하여 return한다. 


function solution(num_list) {
    if(num_list.length > 10) return num_list.reduce((res,num)=>res+num,0);
    return num_list.reduce((res,num)=>res*num,1);
    
}