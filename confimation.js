document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");

  form.addEventListener("submit", function (event) {
    if (email.value !== confirmEmail.value) {
      alert("Emails do not match!");
      event.preventDefault();
    }
    else
    {
        alert("Thank you for you submission! We will get back to you as soon as possible.");
    }
    
  });
});
