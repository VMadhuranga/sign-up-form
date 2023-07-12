const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirm-password");
let password = "";
let confirmPassword = "";


inputPassword.addEventListener("input", () => {
    password = inputPassword.value;

    inputConfirmPassword.addEventListener("input", () => {
        confirmPassword = inputConfirmPassword.value;

        checkPassword(password, confirmPassword);
    });

});

function checkPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return inputConfirmPassword.nextElementSibling.textContent = "Password do not match";
    }
    inputConfirmPassword.nextElementSibling.textContent = "";
}