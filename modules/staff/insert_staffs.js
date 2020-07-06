const { con } = require("../../database/connection");
const swal = require("sweetalert")

let staffForm = document.forms['staff-form'];
staffForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let firstName = staffForm.fname.value
  let middleName = staffForm.mname.value
  let lastName = staffForm.lname.value
  let gender = staffForm.gender.value
  let dob = staffForm.dob.value
  let phone = staffForm.phone.value
  let maritalStatus =staffForm.marital_status.value
  let email = staffForm.email.value
  let postalAdd = staffForm.postal_address.value
  let acQualification= staffForm.ac_qualification.value
  let acSpecialization = staffForm.ac_specialization.value
  let lastSchool = staffForm.last_school.value
  let bank = staffForm.bank.value
  let accountNo = staffForm.acno.value
  let branch = staffForm.branch.value
  let ssnit = staffForm.ssnit.value
  let EmergName= staffForm.emerg_name.value
  let EmergEmail = staffForm.emerg_email.value
  let EmergAddress = staffForm.emerg_address.value
  let EmergPhone = staffForm.emerg_phone.value
  let dateEmployed = staffForm.date_employed.value
  let grade = staffForm.grade.value
  let staffType = staffForm.staff_type.value
  let department= staffForm.department.value
  let position = staffForm.position.value
  let basicSalary = staffForm.basic_salary.value
  let status = staffForm.status.value                 
  
  
  con.query(
    `insert into tblstaff (fname,mname,lname,dob,gender,phone,marital_status,email,postal_address,ac_qualification,ac_specialization,last_school,bank,
      acno,branch,ssnit,emerg_name,emerg_email,emerg_address,emerg_phone,date_employed,grade,staff_type,department,position,basic_salary,status)
      
         Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
         
             [firstName, middleName, lastName, dob, gender,phone,maritalStatus,email,postalAdd,acQualification,acSpecialization,lastSchool,bank
            ,accountNo  ,branch, ssnit,EmergName,EmergEmail,EmergAddress,EmergPhone,dateEmployed,grade, staffType, department,position,basicSalary,status],
              
              function (err, restult, fields) {
                if (err) {
                  console.log(err);
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
