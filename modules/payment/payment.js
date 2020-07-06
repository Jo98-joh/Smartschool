const { con } = require("../../database/connection");

let paymentForm = document.forms['payment-form'];
paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let schoolCode = paymentForm.school_code.value
    let acYear = paymentForm.acyear.value
    let acTerm = paymentForm.acterm.value
    let studentNo = paymentForm.student_no.value
    let paymentDate = paymentForm.payment_date.value
    let paymentType = paymentForm.payment_type.value
    let Amount = paymentForm.amount.value
    let totalPaid = paymentForm.total_paid.value
    let curBalance= paymentForm.cur_balance.value
    
    con.query(
        `insert into tblpayment(school_code,acyear,acterm,student_no,payment_date,payment_type,amount,total_paid,cur_balance)
    
             Values (?,?,?,?,?,?,?,?,?)`,

             [schoolCode,acYear,acTerm,studentNo,paymentDate,paymentType,Amount,totalPaid,curBalance],

                function (err, restult, fields) {
                if (err) {
                    console.log(err);
                } else {
                    // alert('Payment added');
                }
            }
    );
});
 
   