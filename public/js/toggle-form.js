var LoginForm = document.getElementById('loginForm');
var RegForm = document.getElementById('registerForm');
var Indicator = document.getElementById('indicator');

function register() {
  RegForm.style.transform = 'translateX(0px)';
  LoginForm.style.transform = 'translateX(0px)';
  Indicator.style.transform = 'translateX(100px)';
}
function login() {
  RegForm.style.transform = 'translateX(300px)';
  LoginForm.style.transform = 'translateX(300px)';
  Indicator.style.transform = 'translateX(0px)';
}
