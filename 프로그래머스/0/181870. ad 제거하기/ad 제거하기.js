function solution(strArr) {
    const answer = [];
    
    strArr.forEach((el)=>{
        if(el.indexOf("ad")===-1){
            answer.push(el);
        }
    });
    return answer;
}