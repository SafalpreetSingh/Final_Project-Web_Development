document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        this.submit();
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const membership = document.getElementById('membership').value;
  
      if (name === '' || email === '' || phone === '' || membership === '') {
        alert('Please fill in all fields.');
        return false;
      }
  
  
      return true;
    }
  });
  