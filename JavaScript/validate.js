function submit1()
{
	var firstname=document.forms["form"]["firstname"].value;
	var lastname=document.forms["form"]["lastname"].value;
	var email=document.forms["form"]["email"].value;
	var gender=document.forms["form"]["gender"].value;
	var mobile=document.forms["form"]["mobile"].value;
	
	
	//if name and lastname both fiels are missing
	if(firstname=="" && lastname=="")
	{
		alert("Please fill all the fields to continue..!")
		return false;
	}
	
	// name validation
	
	if(firstname=="")
	{
		alert("Please enter the first name to continue")
		return false;
	}
	
	if(lastname=="")
	{
		alert("Please enter the last name to continue")
		return false;
	}
	

	
	
	// to validate as whether its numeric.
	if(!isNaN(firstname && lastname ))
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
   
   
    if(gender=="")
		{
			alert("Enter the gender!")
			return false;
		}
		
	if(mobile=="")
		{
			alert("Enter the the mobile number!")
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

