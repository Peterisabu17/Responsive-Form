let formbox= document.getElementById("formbox")
let entername= document.getElementById("entername")
let mobilenumber= document.getElementById("mobilenumber")
let lastname= document.getElementById("lastname")
let email= document.getElementById("email")
let password= document.getElementById("pasword")
let cpassword= document.getElementById("cpassword")
let btn1= document.getElementById("btn1")
let hbtn1= document.getElementById("hbtn1")
let enternameErr= document.getElementById("entername-err")
let mobilenumberErr= document.getElementById("mobilenumber-err")
let lastnameErr= document.getElementById("lastname-err")
let emailErr= document.getElementById("email-err")
let passwordErr= document.getElementById("password-err")
let cpasswordErr= document.getElementById("cpassword-err")


formbox.addEventListener("submit",(nom)=>{
  nom.preventDefault()
  console.log(1234)
  if (
    entername.value == "" ||
    mobilenumber.value == "" ||
    lastname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    cpassword.value == "" 
  ) {
    hbtn1.textContent="required field have not been met"
    setTimeout(() => {
      hbtn1.textContent=""
    }, 3000)
  }

  if(entername.value.length<3 && entername.value !=""){
    enternameErr.textContent="name should not be less than three characters"
    setTimeout(()=> {
      enternameErr.textContent=""
    }, 3000)
  }
  if(lastname.value.length<4 && lastname.value !=""){
    lastnameErr.textContent="lastname should not be less than four characters"
    setTimeout(()=> {
      lastnameErr.textContent=""
    }, 3000)
  }
  if(
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && email.value !="") {
    emailErr.textContent="please enter a valid email"
    setTimeout(() => {
      emailErr.textContent=""
    }, 3000)
  }
  if (password.value.length < 8 && password.value !=="") {
    passwordErr.textContent="please enter a strong password"
    setTimeout(() => {
      passwordErr.textContent=""
    }, 3000)
  }
  if (password.value !=cpassword) {
    cpasswordErr.textContent = "password does not match"
    setTimeout(() => {
      cpasswordErr.textContent=""
    }, 3000)
  }
})

checker.addEventListener("click",()=>{
  console.log(checker.checked)

  if(checker.checked){
    for (let e = 0; e < passwordGroup.length; e++) {
      password[e].type = "text";
    }
  } else {
    for (let e = 0; e < passwordGroup.length; e++) {
      password[e].type = "password";
    }
  }
})