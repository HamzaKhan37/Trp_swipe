const toggleForm = document.querySelectorAll(".toggleForm");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
Document.write("HI");
return(
   <App/>
);
toggleForm.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    loginForm.classList.toggle("active");
    signupForm.classList.toggle("active");
  });
});
