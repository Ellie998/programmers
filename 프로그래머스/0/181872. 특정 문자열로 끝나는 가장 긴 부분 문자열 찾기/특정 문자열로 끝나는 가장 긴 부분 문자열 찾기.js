function solution(myString, pat) {    
    const idx = [...myString].reverse().join("").indexOf([...pat].reverse().join(""));
    
    return myString.slice(0,myString.length-idx);
}