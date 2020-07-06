const { con } = require("../../database/connection");
const swal = require("sweetalert")

let registerForm = document.forms['register-form'];

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let firstName = registerForm.fname.value
  let middleName = registerForm.mname.value
  let lastName = registerForm.lname.value
  let homeAddress = registerForm.house.value
  let dob = registerForm.dob.value
  let gender = registerForm.gender.value
  let citizen = registerForm.citizen.value
  let homeTown = registerForm.hometown.value
  let pob = registerForm.pob.value
  let studentPostal = registerForm.studnt_postal_add.value
  let admterm = registerForm.admterm.value
  let admyear = registerForm.admyear.value
  let religion = registerForm.religion.value
  let denomination = registerForm.denomination.value
  let studentEmail = registerForm.student_email.value
  let specialSkills = registerForm.special_skills.value
  let classAdmitted = registerForm.class_admitted.value
  let languages = registerForm.languages.value
  let firstLang = registerForm.first_lang.value
  let secondLang = registerForm.second_lang.value
  let curriculum = registerForm.curriculum.value
  let currentClass = registerForm.current_class.value
  let prevSchool = registerForm.prev_school.value
  let prevschAdd = registerForm.prevsch_add.value
  let studentPhone = registerForm.student_phone.value
  let father = registerForm.father.value
  let fprofession = registerForm.fprofession.value
  let fcompany = registerForm.fcompany.value
  let fjobtitle = registerForm.fjobtitle.value
  let fcompanyAdd = registerForm.fcompany_add.value
  let fphone = registerForm.fphone.value
  let femail = registerForm.femail.value
  let fpostal = registerForm.fpostal.value
  let mother = registerForm.mother.value
  let mprofession = registerForm.mprofession.value
  let mcompany = registerForm.mcompany.value
  let mjobtitle = registerForm.mjobtitle.value
  let mcompanyAdd = registerForm.mcompany_add.value
  let mphone = registerForm.mphone.value
  let memail = registerForm.memail.value
  let mresidence = registerForm.mresidence.value
  let mpostal = registerForm.mpostal.value
  let guardian = registerForm.guardian.value
  let gprofession = registerForm.gprofession.value
  let gcompany = registerForm.gcompany.value
  let gjobtitle = registerForm.gjobtitle.value
  let gcompany_add = registerForm.gcompany_add.value
  let gphone = registerForm.gphone.value
  let gemail = registerForm.gemail.value
  let gpostal = registerForm.gpostal.value
  let gresidence = registerForm.gresidence.value
  let siblings = registerForm.siblings.value
  let older_siblings = registerForm.older_siblings.value
  let younger_siblings = registerForm.younger_siblings.value
  let disability = registerForm.disability.value
  let disability_problems = registerForm.disability_problems.value
  let disability_learning = registerForm.disability_learning.value
  let disability_details = registerForm.disability_details.value
  let disability_referred = registerForm.disability_referred.value
  let doctor = registerForm.doctor.value
  let dphone = registerForm.dphone.value
  let dpractice = registerForm.dpractice.value
  let medical_condition = registerForm.medical_condition.value
  con.query(
    `insert into tblstudent (fname,mname,lname,house,dob,gender,citizen,hometown,pob,studnt_postal_add,admterm,admyear,religion,denomination,student_email,special_skills,
    class_admitted,languages,first_lang,second_lang,curriculum,current_class,prev_school,prevsch_add,student_phone,
    father,fprofession,fcompany,fjobtitle,fcompany_add,fphone,femail,fpostal,mother,mprofession,mcompany,mjobtitle,mcompany_add,mphone,memail,mresidence,mpostal
    ,guardian,gprofession,gcompany,gjobtitle,gcompany_add,gphone,gemail,gresidence,gpostal,siblings,older_siblings,younger_siblings,disability,disability_problems,disability_referred,disability_learning,disability_details,doctor
    ,dphone,dpractice,medical_condition)
    
       Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,

    [firstName, middleName, lastName, homeAddress, dob, gender, citizen, homeTown, pob, studentPostal, admterm, admyear, religion, denomination
      , studentEmail, specialSkills, classAdmitted, languages, firstLang, secondLang, curriculum, currentClass, prevSchool, prevschAdd, studentPhone,
      father, fprofession, fcompany, fjobtitle, fcompanyAdd, fphone, femail, fpostal, mother, mprofession, mcompany, mjobtitle, mcompanyAdd, mphone, memail
      , mresidence, mpostal,guardian,gprofession,gcompany,gjobtitle,gcompany_add,gphone,gemail,gresidence,gpostal,siblings,older_siblings,younger_siblings,disability,disability_problems,disability_referred,disability_learning,disability_details,doctor
      ,dphone,dpractice,medical_condition],

    function (err, restult, fields) {
      if (err) {
        throw err
      } else {
        swal({
          title: "Are you sure?",
          text: "You Want To Add This Student!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Student Added Successfully!", {
              icon: "success",
            });
          } else {
            swal("The file Was Not Added");
          }
        });
      }
    }
  );
});


  





























  
          
  
