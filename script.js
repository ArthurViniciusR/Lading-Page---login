function Validate(){
    let user = document.getElementById("user")
    let passwd = document.getElementById("passwd")

    if(user.value != "" && passwd.value != ""){
        ShowSection(user.value)
    } else {
        if(user.value == ""){
            user.style.border = "1px solid red"
        } else {
            user.style.border = "none"
        }
        
        if(passwd.value == "") {
            passwd.style.border = "1px solid red"
        } else {
            passwd.style.border = "none"
        }
    }
}

function ShowSection(user){
    document.getElementById("login-section").style.display = "none"
    document.getElementById("welcome-section").style.display = "block"
    document.getElementById("message-name").innerText = `Seja bem vindo ${user}`;
}