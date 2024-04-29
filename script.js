function show(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
   }

   function hide(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
   }

     
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const email1 = document.getElementById('email1');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    if (email.value != '' && name1.value != ''){
        noerror.innerHTML= "Thank You, I'll get back to You soon";
    }
    else {
        validate();
    }
   
})

function validate() {
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!email.value.match(emailcheck)) {
        emailerror.innerHTML = "  Enter valid email address* </br>";
    }
    else {
        emailerror.innerHTML = "";
    }
    if (name1.value === ""){
        nameerror1.innerHTML = " First Name is required* </br>";
    }
    else{
        nameerror1.innerHTML = "";
    }
    if (name2.value === ""){
        nameerror2.innerHTML = "Last Name is required* </br>";
    }
    else{
        nameerror2.innerHTML = "";
    }
    if(mobile.value == ""){
        mobileerror.innerHTML = "Mobile num is required* </br>"
    }
    else{
        mobileerror.innerHTML = "";

    }
}

function submited(){
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (!email1.value.match(emailcheck)) {
        noerror1.innerHTML= "<b>Enter valid E-mail*</b>";
        noerror1.style.color = "red";
    }
    else {
        noerror1.innerHTML= "<b> Thank You, We will get back to You soon </b>";
        noerror1.style.color = "green";

    }
}