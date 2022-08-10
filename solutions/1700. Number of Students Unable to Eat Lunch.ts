// Problem Link:
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

function countStudents(students: number[], sandwiches: number[]): number {
  let count = 0;
  while (count < students.length) {
    if (students[0] === sandwiches[0]) {
      count = 0;
      dequeue(students);
      sandwiches.shift();
    } else {
      count++;
      let shifted = dequeue(students);
      enqueue(students, shifted as number);
    }
  }
  return students.length;
}

let enqueue = function (students: number[], elem: number) {
  students.push(elem);
};

let dequeue = function (students: number[]) {
  let shifted = students.shift();
  return shifted;
};
