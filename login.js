const { con } = require("./database/connection");
const swal = require("sweetalert")
var count = 2
function validate() {
	var school_code = document.myform.school_code.value;
	var school_name= document.myform.school_name.value;
	var valid = false;
	var school_codeArray = ["username1", "username2", "username3", "username4"];  // as many as you like - no comma after final entry
	var school_nameArray = ["password1", "password2", "password3", "password4"];  // the corresponding passwords;
	for (var i=0; i <school_codeArray.length; i++) {
	if ((school_code== school_codeArray[i]) && (school_name == school_nameArray[i])) {
	valid = true;
	break;
	}
	}

	if (valid) {
		alert ("Login was sucessfully processed.  You will be redirected to the members page now.");
		window.location = "index.html";
		return false;
		}
		var t = " tries";
		if (count == 1) {t = " try"}
		if (count >= 1) {
		alert ("Invalid username and/or password.  You have " + count + t + " left.");
		document.myform.school_code.value = "";
		document.myform.school_name.value = "";
		setTimeout("document.myform.school_code.focus()", 25);
		setTimeout("document.myform.school_name.select()", 25);
		count --;
		}
		

// 	login(school_name, school_code);

// 	// 	if ( school_name == "gitplus academy" & school_code == "1000001"){
// 	// swal ("Login successfully");
// 	// window.location = "index.html";
// 	//   }
// 	//   else{
// 	// 	swal("Invalid username or password");
// 	// 	}
// 	//   return false;
// }


//  function login(school, code){
// 	 var sch = school;
// 	 var cd = code;
// con.query(
// 	`select * from tblaccount where school_name = ? AND school_code = ?`,[sch,cd], (err, result) => {
// 		if (err) {
// 		throw err;
// 	}
// 	console.log(err);
// }

// )}