// Auto redirect if already logged in
function redirectIfLoggedIn() {
  if (localStorage.getItem("loggedIn")) {
    window.location.href = "dashboard.html";
  }
}

// LOGIN FUNCTION
function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-password").value;
  const savedEmail = localStorage.getItem("userEmail");
  const savedPass = localStorage.getItem("userPass");
  const savedName = localStorage.getItem("userName");

  if (email === savedEmail && pass === savedPass) {
    localStorage.setItem("loggedIn", "true");

    Swal.fire({
      title: 'Login Successful',
      text: `Welcome back, ${savedName}!`,
      icon: 'success',
      confirmButtonText: 'Go to Dashboard',
      background: '#2c3e50',
      color: '#fff'
    }).then(() => {
      window.location.href = "dashboard.html";
    });
  } else {
    Swal.fire({
      title: 'Login Failed',
      text: 'Invalid email or password.',
      icon: 'error',
      confirmButtonText: 'Try Again',
      background: '#2c3e50',
      color: '#fff'
    });
  }
}

// REGISTER FUNCTION
function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-password").value;

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPass", pass);
  localStorage.setItem("loggedIn", "true");

  Swal.fire({
    title: 'Registration Successful',
    text: `Welcome, ${name}!`,
    icon: 'success',
    confirmButtonText: 'Go to Dashboard',
    background: '#2c3e50',
    color: '#fff'
  }).then(() => {
    window.location.href = "dashboard.html";
  });
}

// DASHBOARD LOGOUT FUNCTION
function initDashboard() {
  const name = localStorage.getItem("userName");
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
  document.getElementById("user-name").innerText = name;

  window.logout = function () {
    localStorage.removeItem("loggedIn");
    location.href = "index.html";
  };
}
