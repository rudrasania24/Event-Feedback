document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Your feedback has been submitted successfully!");
      form.reset(); // clear form after submit
    });
  }
});

