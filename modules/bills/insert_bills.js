const swal = require("sweetalert")
const { con } = require("../../database/connection");

let billsForm = document.forms['bills-form'];
billsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let studentNo = billsForm.student_no.value
    let schoolCode = billsForm.school_code.value
    let acYear = billsForm.acyear.value
    let acTerm = billsForm.acterm.value
    let Grade = billsForm.grade.value
    let classCode = billsForm.class_code.value
    let Item = billsForm.item.value
    let Amount = billsForm.amount.value
    let Source = billsForm.source.value
    let Import = billsForm.import.value
    let Export = billsForm.export.value

    con.query(
        `insert into tblbills (student_no,school_code,acyear,acterm,grade,class_code,item,amount,source,import,export)
    
             Values (?,?,?,?,?,?,?,?,?,?,?)`,

              [studentNo,schoolCode,acYear,acTerm,Grade,classCode,Item,Amount,Source,Import,Export],

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
