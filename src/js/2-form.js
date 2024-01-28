document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements['email'].value = email;
    form.elements['message'].value = message;
  }

  form.addEventListener('input', function () {
    const currentData = {
      email: form.elements['email'].value,
      message: form.elements['message'].value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (email && message) {
      console.log({ email, message });
      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});
