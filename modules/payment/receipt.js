// Submit form with id function.
function submit() {
var schoolcode = document.getElementById("school_code").value;
var acyear= document.getElementById("acyear").value;
if (validation()) // Calling validation function
{
document.getElementById("payment-form").submit(); //form submission
alert(" SchoolCode: " + schoolcode + " n Academic Year: " +acyear + " n Payment Form : " + document.getElementById("payment-form").getAttribute("id") + "nn Form Submitted Successfully......");
}
}