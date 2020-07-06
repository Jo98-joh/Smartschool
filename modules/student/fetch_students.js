const { con } = require("../../database/connection");

con.query("Select * from tblstudent", (err, result) => {
  if (err) {
    throw err;
  }

  let students = Array.from(result);
  let studentsTable = document.getElementById('students-table');

  students.forEach((student, index) => {
    let tr = document.createElement('tr');

    let studentNo = document.createElement('td');
    studentNo.appendChild(document.createTextNode(student.student_no));
    tr.appendChild(studentNo);

    let firstName = document.createElement('td');
    firstName.appendChild(document.createTextNode(student.fname));
    tr.appendChild(firstName);

    let lastname = document.createElement('td');
    lastname.appendChild(document.createTextNode(student.lname));
    tr.appendChild(lastname);

    studentsTable.appendChild(tr);
  });
});