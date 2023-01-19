const inputs = document.querySelectorAll(".input ");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




/* validation js\*/

function submit2()
{
	var name=document.forms["form"]["name"].value;
	var feedback_type=document.forms["form"]["feedback_type"].value;
	var email=document.forms["form"]["email"].value;
	var message=document.forms["form"]["message"].value;
	var phone=document.forms["form"]["phone"].value;
	
	
	//if name and lastname both fiels are missing
	if(name=="" && feedback_type=="")
	{
		alert("Please fill all the fields to continue..!")
		return false;
	}
	
	// name validation
	
	if(name=="")
	{
		alert("Please enter the first name to continue")
		return false;
	}
	

	

	
	
	// to validate as whether its numeric.
	if(!isNaN(name ))
	{
		alert("The name should have to include only characters")
		return false;
	}
	// email field validation
	
	if(email=="")
	{
		alert("Please enter the email address to continue!")
		return false;
	}



	
	var at = email.indexOf("@");
	var dot=email.lastIndexOf(".");
	if(at<1||dot<at+2||dot+2>=email.length)
	{
		alert("Not a valid email!")
        return false;
    }	
   
	if(phone=="")
		{
			alert("Enter the the mobile number!")
			return false;
		}
   
    if(feedback_type=="")
		{
			alert("Enter the feedback_type!")
			return false;
		}
		
	if(message=="")
		{
			alert("Enter the message you want to send")
			return false;
		}
	  
   
   
   	/*if(isNaN(mobile))
	{
	alert("Enter a valid mobile number")
		return false;
	}*/
	
 
	//select validation
    
    /*if(document.form.gender.value=="Select option")
    {
        alert("Please select an option to continue");
        return false;
    }*/
	

	return(true)
}




