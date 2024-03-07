function solution(participant, completion) {
  let answer = "";
  let table = new Map();

  completion.forEach((person) => {
    const count = table.get(person) || 0;
    table.set(person, count + 1);
  });

  participant.forEach((person) => {
    const count = table.get(person) || 0;
    if (count === 0) {
      answer = person;
    } else {
      table.set(person, count - 1);
    }
  });

  return answer;
}
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
