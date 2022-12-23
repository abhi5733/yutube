

let form1 = document.getElementById("form")
form1.addEventListener("submit",fun)
let arr = JSON.parse(localStorage.getItem("signup")) || [] ;
function fun(event){
    event.preventDefault()
  password = form1.password.value ;
  email = form1.email.value;
  console.log(password,email);
  if(password==="" || email===""){
    alert("please fill all the details correctly")
  }else{
  let obj={
    password,
    email
  }
  arr.push(obj)
  localStorage.setItem("signup",JSON.stringify(arr))
  alert("sign up successfull")
  password = form1.password.value ="" ; form1.email.value ="" ;
}
}



//login

let form2 = document.getElementById("form1") ;
form2.addEventListener("submit" , login) ;


function login(event) {
    event.preventDefault()
    email= form2.email.value;
    password = form2.password.value;
 
     arr.forEach(elem => {
        if(email===elem.email && password=== elem.password){
            localStorage.setItem("login" , JSON.stringify({email,password}) )
            form2.email.value="" ; form2.password.value="" ;
            localStorage.setItem("flag" , true)
            alert("successfull").break();
            
        }
     });
     
        alert("wrong credentials").break() ;
        
        

}