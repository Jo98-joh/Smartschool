const { con } = require("./database/connection");
const swal = require('sweetalert')

let accountForm = document.forms['account-register'];
accountForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let schoolCode = accountForm.school_code.value
    let schoolName = accountForm.school_name.value
    let schoolPrefix=accountForm.school_prefix.value
    let mainPhone = accountForm.phone_main.value
    let extraPhone =accountForm.phone_extra.value
    let email = accountForm.email.value
    let region = accountForm.region.value
    let town = accountForm.town.value
    
    
    con.query(
        `insert into tblaccount(school_code,school_name,school_prefix,phone_main,phone_extra,email,region,town)
    
             Values (?,?,?,?,?,?,?,?)`,

             [schoolCode,schoolName,schoolPrefix,mainPhone,extraPhone,email,region,town],

                function (err, restult, fields) {
                if (err) {
                    console.log(err);
                } else {
                    swal({
                        title: "Do?",
                        text: "You Wish To Create Account!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal("Account Create Successfully!", {
                            icon: "success",
                          });
                        } else {
                          swal("Account Not Created");
                        }
                      });
                }
            }
    );
});
 
   