const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");

var filterEmail =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var filterPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-\._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])[A-Za-z\d-\._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]{8,}$/;

const handleLogin = () => {
  document.getElementById("common_validate_error").style.display = "none";
  document.getElementById("error_validate_email").style.display = "none";
  document.getElementById("error_validate_password").style.display = "none";

  if (!email.value || !password.value) {
    document.getElementById("common_validate_error").style.display = "block";
    return;
  }

  if (!filterEmail.test(email.value)) {
    document.getElementById("error_validate_email").style.display = "block";
    return;
  }

  if (!filterPassword.test(password.value)) {
    document.getElementById("error_validate_password").style.display = "block";
    return;
  }

  if (filterEmail.test(email.value) && filterPassword.test(password.value)) {
    window.location.assign("../index/index.html");
  }
};
