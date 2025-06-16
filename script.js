const form = document.getElementById("form");

const errorIcon = document.getElementsByClassName("error-icon");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameError = document.getElementById("firstname-error");
const lastNameError = document.getElementById("lastname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
// min of 9 characters with atleast 1 number and 1 letter
const passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9]).{9,}/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let isValid = true;
function handleValidation (e) {
  const value = e.target.value.trim();
  switch (e.target.name) {
    case "firstname":
      if (!e.target.value) {
        console.log("First name failed validation");
        firstNameError.innerHTML = "First name is required";
        isValid = false;
      } else {
        firstNameError.innerHTML = "";
        isValid = true;
      }
      break;
      
    case "lastname":
      if (!e.target.value) {
        console.log("Last name failed validation");
        lastNameError.innerHTML = "Last name is required";
        isValid = false;
      } else {
        lastNameError.innerHTML = "";
        isValid = true;
      }
      break;

    case "email":
      const emaill = e.target.value;

      if (!e.target.value) {
        console.log("Email failed validation");
        emailError.innerHTML = "Email is required";
        isValid = false;
      }else if(!emailRegex.test(emaill)){
        console.log("Email not valid");
        emailError.innerHTML = "Looks like this is not a valid email";
      } 
      else {
        emailError.innerHTML = "";
        isValid = true;
      }
      break;

    case "password":
      const passworrd = e.target.value;

      if (!e.target.value) {
        console.log("Password failed validation");
        passwordError.innerHTML = "Password is required";
        isValid = false;
      } else if (!passwordRegex.test(passworrd)){
        console.log("Password is not strong");
          passwordError.innerHTML = "Min of 9 characters, at least 1 number and 1 letter";}
      else {
        passwordError.innerHTML = "";
        isValid = true;
      }
      break;

    default:
      break;
  }
}

firstName.addEventListener("input", handleValidation);
lastName.addEventListener("input", handleValidation);
email.addEventListener("input", handleValidation);
password.addEventListener("input", handleValidation);


   //if (isValid) {
     //   alert("Form Submitted Successfully!"); 
   // document.getElementById("form").reset();
     // setTimeout(() => {
       // location.reload();
    // }, 500);
   // }
    // const data= Object.fromEntries(new FormData(e.currentTarget).entries())
    // console.log(data)

   // let firstName = document.getElementById("firstname");
     /* let lastName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let isValid = true;

    if (firstName.value.trim() === "") {
        showError("firstname", "First Name cannot be empty");
        isValid = false;
    } else {
        clearError("firstname");
    }

    if (lastName.value.trim() === "") {
        showError("lastname", "Last Name cannot be empty");
        isValid = false;
    } else {
        clearError("lastname");
    }

    if (email.value.trim() === "") {
        showError("email", "Email cannot be empty");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError("email", "Looks like this is not a valid email");
        isValid = false;
    } else {
        clearError("email");
    }

    if (password.value.trim() === "") {
        showError("password", "Password cannot be empty");
        isValid = false;
    } else {
        clearError("password");
    }

    
//     if (isValid) {
//         alert("Form Submitted Successfully!"); 
//     document.getElementById("form").reset();
//      setTimeout(() => {
//        location.reload();
//      }, 500);

// };

function showError(inputId, message) {
    let container = document.getElementById(inputId + "-container");
    let input = document.getElementById(inputId);
    let errorMsg = document.getElementById(inputId + "-error");
    let icon = document.getElementById(inputId + "-icon");

    if (!container || !input || !errorMsg || !icon) {
        console.error(`Error: Missing elements for ${inputId}`);
        return; 
    }
    container.classList.add("has-error");
    input.classList.add("error");
    errorMsg.textContent = message; 
    errorMsg.style.display = "block";
    icon.style.display = "block";
}

function clearError(inputId) {
    let container = document.getElementById(inputId + "-container");
    let input = document.getElementById(inputId);
    let errorMsg = document.getElementById(inputId + "-error");
    let icon = document.getElementById(inputId + "-icon");

    container.classList.remove("has-error"); 
    input.classList.remove("error");
    errorMsg.style.display = "none";
    icon.style.display = "none";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
})*/