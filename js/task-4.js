
const loginForm = document.querySelector(".login-form")

console.dir(loginForm);

loginForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(ev){
    ev.preventDefault();

    const form = ev.target;
    const emailEl = form.elements.email.value;
    const passwordEl = form.elements.password.value;

    if(emailEl ===""||passwordEl=== ""){
        alert("All form fields must be filled in");
        return;
    };

    const result = {
        email: emailEl.trim(),
        password: passwordEl.trim()
    };

    console.log(result);

    loginForm.reset();
}