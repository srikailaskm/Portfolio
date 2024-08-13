// /**
// * PHP Email Form Validation - v3.9
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach(function (e) {
//     e.addEventListener('submit', function (event) {
//       event.preventDefault();

//       let thisForm = this;
//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

//       if (!action) {
//         displayError(thisForm, 'The form action property is not set!');
//         return ;
//       }

//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData(thisForm);

//       if (recaptcha) {
//         if (typeof grecaptcha !== "undefined") {
//           grecaptcha.ready(function () {
//             grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//               .catch(error => {
//                 displayError(thisForm, error.message || 'Failed to get reCAPTCHA token.');
//               });
//           });
//         } else {
//           displayError(thisForm, 'The reCAPTCHA JavaScript API URL is not loaded!');
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-Requested-With': 'XMLHttpRequest' }
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.text();
//         } else {
//           throw new Error(`${response.status} ${response.statusText} ${response.url}`);
//         }
//       })
//       .then(data => {
//         thisForm.querySelector('.loading').classList.remove('d-block');
//         if (data.trim() === 'OK') {
//           thisForm.querySelector('.sent-message').classList.add('d-block');
//           thisForm.reset();
//         } else {
//           throw new Error(data || 'Form submission failed with no error message returned.');
//         }
//       })
//       .catch(error => {
//         displayError(thisForm, error.message || 'An error occurred during form submission.');
//       });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').textContent = error; // Use textContent to avoid XSS risks
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();


document.getElementById('email-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log('clicked')
  const name = document.getElementById('name').value
  const nameVal = name.trim()
  const email = document.getElementById('email').value
  const subject = document.getElementById('subject').value
  const subjectValue = subject.trim()
  const message = document.getElementById('message').value
  const messageValue=message.trim()
  if(nameVal==''){
    const nameError = document.getElementById('nameErr').innerHTML = 'please enter the name'
    return nameError
  }
  var email_check = /^[^\s@]+@(gmail|yahoo|hotmail|outlook|aol|icloud|protonmail|mail|yandex|zoho)\.(com|in|org|net|edu|gov|mil|biz|info|name|coop|aero|eu|int|pro|museum|arpa|[a-z]{2})$/

  if(!email_check.test(email)){
    const emailError = document.getElementById('emailErr').innerHTML = 'Please enter a valid email'
    return emailError
  }

  if(subjectValue == ''){
    const suberr= document.getElementById("subErr").innerHTML='please enter the subject'
    return suberr
  }
  if (messageValue==''){
    const msgErr=document.getElementById("msgErr").innerHTML='please enter a valid message'
    return msgErr
  }

  alert("form submited")
  window.location.reload()
})


// document.addEventListener('DOMContentLoaded', function () {
//   "use strict";

//   // Function to show error messages
//   function showError(inputId, message) {
//     const errorElement = document.getElementById(`${inputId}Err`);
//     errorElement.textContent = message;
//     errorElement.classList.add('d-block');
//   }

//   // Function to clear error messages
//   function clearErrors() {
//     document.querySelectorAll('.text-danger').forEach(function (element) {
//       element.textContent = '';
//       element.classList.remove('d-block');
//     });
//   }

//   // Form validation and submission
//   document.getElementById('email-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Clear previous errors
//     clearErrors();

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const subject = document.getElementById('subject').value.trim();
//     const message = document.getElementById('message').value.trim();

//     let isValid = true;

//     // Validate name
//     if (!name) {
//       showError('name', 'Name is required.');
//       isValid = false;
//     }

//     // Validate email
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       showError('email', 'A valid email is required.');
//       isValid = false;
//     }

//     // Validate subject
//     if (!subject) {
//       showError('subject', 'Subject is required.');
//       isValid = false;
//     }

//     // Validate message
//     if (!message) {
//       showError('message', 'Message is required.');
//       isValid = false;
//     }

//     if (isValid) {
//       // Show loading message
//       document.querySelector('.loading').classList.add('d-block');
//       document.querySelector('.error-message').classList.add('d-none');
//       document.querySelector('.sent-message').classList.add('d-none');

//       // Prepare form data
//       const formData = new FormData(this);

//       // Simulate form submission (replace with actual fetch request)
//       fetch('YOUR_SERVER_ENDPOINT', {
//         method: 'POST',
//         body: formData
//       })
//         .then(response => {
//           if (response.ok) {
//             return response.text();
//           } else {
//             throw new Error('Network response was not ok.');
//           }
//         })
//         .then(data => {
//           document.querySelector('.loading').classList.remove('d-block');
//           if (data.trim() === 'OK') {
//             document.querySelector('.sent-message').classList.add('d-block');
//             document.getElementById('email-form').reset();
//           } else {
//             throw new Error(data || 'Form submission failed.');
//           }
//         })
//         .catch(error => {
//           document.querySelector('.loading').classList.remove('d-block');
//           document.querySelector('.error-message').textContent = error.message;
//           document.querySelector('.error-message').classList.add('d-block');
//         });
//     }
//   });
// });


