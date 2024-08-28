const form = document.getElementById("form");

const card = document.getElementById("card");
const errMsg = document.getElementById("error");
const success = document.getElementById("success");

function validateEmail() {
    const userEmail = document.getElementById("email");
    const successEmail = document.getElementById("success-email"); 
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(userEmail.value)){
        card.style.display = "none";
        success.style.display = "flex";
        successEmail.innerText = userEmail.value;

    }
    else{
        errMsg.innerText = "valid email required";
        userEmail.classList.add("invalid-email")
    }
}




form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateEmail();
})