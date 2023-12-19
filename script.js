var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write Full Name';
    return false;
}
nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}

function validatephone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits please';
    return false;
}
phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;

}

function validateemail(){

    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = 'email  is required';
        return false;
    }
   
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}

// function validatetextarea(){

    
//     var textarea = document.getElementById("textarea").value;

//     if(textarea.length == 0){
//         messageError.innerHTML = 'add some text';
//         return false;
//     }

//     if(textarea.length <= 30){
//         messageError.innerHTML = 'Not Less than 30 Character';
//         return false;
//     }
   

//     messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
// return true;

// }

function validatetextarea(){
    var message = document.getElementById("textarea").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        return false;

    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm(){
    if(!validateName() ||  !validatephone() || !validateemail() || !validatetextarea()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout( function(){
            submitError.style.display = 'none';
        },3000)
        return false;
    }
    return true;
}