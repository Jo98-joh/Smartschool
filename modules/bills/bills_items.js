const { con } = require("../../database/connection");

con.query("Select * from tblbill_item where school_code = '1000001'", (err, result) => {
  if (err) {
    throw err;
  }

  let bills= Array.from(result);
  let billsTable = document.getElementById('bills-table');

  bills.forEach((bills, index) => {
    let tr = document.createElement('tr');

    let schoolCode = document.createElement('td');
    schoolCode.appendChild(document.createTextNode(bills.school_code));
    tr.appendChild(schoolCode);

    let billCode = document.createElement('td');
    billCode.appendChild(document.createTextNode(bills.bill_code));
    tr.appendChild(billCode);

    let billDesc = document.createElement('td');
    billDesc.appendChild(document.createTextNode(bills.bill_desc));
    tr.appendChild(billDesc);

    billsTable.appendChild(tr);
  });
});
 