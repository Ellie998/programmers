function solution(my_string, is_prefix) {
  var answer =
    String(my_string).slice(0, String(is_prefix).length) === is_prefix ? 1 : 0;
  console.log(answer);
  return answer;
}

// is+prefix가 my_string의 접두사이면 1, 아니면 0을 return
solution("banana", "ban"); //1
solution("banana", "nan"); //0
solution("banana", "abcd"); //0
solution("banana", "bananan"); //0
