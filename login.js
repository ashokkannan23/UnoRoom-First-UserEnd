function validate(){
var username = document.forms["myform"]["email"].value; 
var x=document.myform.email.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }       
var password = document.forms["myform"]["password"].value;
if ( password == null || password == ""){
alert("Password not entered");
return false;
}
else{
alert ("Login successfully");
window.location = "secondPage.html";
return true;
}
}
