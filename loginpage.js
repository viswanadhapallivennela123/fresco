/*function validation(){
let psw1=document.getElementById('psw').value;
let psw2=document.getElementById('conpsw').value;
let name=document.getElementById('fullname').value;
let phone=document.getElementById('phonenumber').value;

    if(psw1=="" && name=="" && phone=="")
    {
        alert('please Enter your details');
        document.getElementById("psw").innerHTML="please enter your details";
        
         
    }
    else if(psw1!=psw2)
    {    
        alert("please enter correct password");
        document.getElementById("psw");
         
    }
    else if(psw1!="" && name!="" && phone!="" && psw1==psw2)
    {
         alert(" Successfully login");
         window.location.assign("1st.html");
         
    }
    
}
*/
/*
function validation() {
    let psw1 = document.getElementById('psw').value;
    let psw2 = document.getElementById('conpsw').value;
    let name = document.getElementById('fullname').value;
    let phone = document.getElementById('phonenumber').value;
    let errorMessage = "";

    if (psw1 === "" || psw2 === "" || name === "" || phone === "") {
        errorMessage = "Please enter all details.";
    } else if (psw1 !== psw2) {
        errorMessage = "Passwords do not match. Please enter correct password.";
    } else {
        alert("Successfully logged in");
        window.location.assign("fresco.html");
        return; // Return to prevent further execution
    }

    // Display error message
    alert(errorMessage);
}
*/
/*
function validation() {
    let psw1 = document.getElementById('psw').value;
    let psw2 = document.getElementById('conpsw').value;
    let name = document.getElementById('fullname').value;
    let phone = document.getElementById('phonenumber').value;
    let errorMessage = "";

    if (psw1 === "" || psw2 === "" || name === "" || phone === "") {
        errorMessage = "Please enter all details.";
    } else if (psw1 !== psw2) {
        errorMessage = "Passwords do not match. Please enter correct password.";
    } else {
        alert("Successfully logged in");
        window.location.assign("index.html");
        return true; // Allow form submission
    }

    // Display error message
    alert(errorMessage);
    return false; // Prevent form submission
}
*/
function validation() {
    var psw1 = document.getElementById('psw').value;
    var psw2 = document.getElementById('conpsw').value;
    var name = document.getElementById('fullname').value;
    var phone = document.getElementById('phonenumber').value;
    var errorMessage = "";
/*
    if (psw1 === "" || psw2 === "" || name === "" || phone === "") {
        errorMessage = "Please enter all details.";
    } else if (psw1 !== psw2) {
        errorMessage = "Passwords do not match. Please enter correct password.";
    } else {
        alert("Successfully logged in");
        window.location.assign("1st.html");
        return; // Return to prevent further execution
    }

    // Display error message
    alert(errorMessage);
    */
   if(psw1==psw2 & name!="" & phone!="" & psw1!="" & psw2!="")
   {
    alert("Successfully logged in");
        window.location.assign("1st.html");
   }
   else{
    alert("Please Enter Correct Details");
   }
}





    
