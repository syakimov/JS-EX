// Closure can be used for data hiding
// Module = IFEE
// ,k vrushta obj
// ,k pravi closure s f

let school = (function(){
  let students = [];
  let teachers = [];

  function addStudent(name, grade) {};
  function addTeacher(name, speciality){};
  function getTeachers(speciality){};
  function getStudents(grade){};

  // expose obj
  return {
    addStudent: addStudent,
    addTeacher: addTeacher,
    getTeachers: getTeachers,
    getStudents: getStudents
  };
})();
