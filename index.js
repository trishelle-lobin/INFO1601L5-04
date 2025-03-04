function getAverageGrade(student, course) {
    let sum = 0;
    let c = 0;
  
    for (let person of student.transcript) {
      if (person.course === course) {
        for (let grade of person.grades) {
          sum += grade;
          c += 1;
        }
      }
    }
  
    if (c === 0) {
      return -1;
    }
    return sum / c;
  }
  
  function getAssignmentMark(student, course, num) {
    for (let person of student.transcript) {
      if (person.course === course && num < person.grades.length) {
        return person.grades[num];
      }
    }
    return -1;
  }
  
  function averageAssessment(students, courseName, assignment) {
    let sum = 0;
    let count = 0;
  
    for (let student of students) {
      for (let person of student.transcript) {
        if (person.course === courseName) {
          if (assignment < person.grades.length) {
            sum += person.grades[assignment];
            count += 1;
          }
        }
      }
    }
  
    if (count === 0) {
      return -1;
    }
    return sum / count;
  }
  let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  const students = [bob, sally, paul];
  