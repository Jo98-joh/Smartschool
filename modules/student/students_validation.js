function prepareEventHandlers(){
    document.getElementById("register-form").onsubmit = function()
    {
        if (document.getElementById("fname").value == "")
        {
            document.getElementById("fname_err").innerHTML = " Please input first name";
            return false;
            
        }
        else if (document.getElementById("fname").value !=""){
            setTimeout(function(){
                document.getElementById("fname_err").innerHTML = " Please input first name";
                return false;

            },1000)
        }else
        {
            document.getElementById("fname_err").innerHTML = "";
            return true;
        }

        
         if (document.getElementById("lname").value == "")
        {
            document.getElementById("lname_err").innerHTML = "please input Last name";
            return false;
        }
         if (document.getElementById("dob").value == "")
        {
            document.getElementById("dob_err").innerHTML = "Please input your date of birth";
            return true;
        }
       
        else 
		{
            
            document.getElementById("lname_err").innerHTML = "";
            document.getElementById("dob_err").innerHTML = "";
			return true;
		}	
    }

}
window.onload =  function() {
	prepareEventHandlers();
};