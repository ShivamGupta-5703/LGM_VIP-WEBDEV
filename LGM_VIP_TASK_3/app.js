document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var number = document.getElementById('number').value;
  var image = document.getElementById('image').value;
  var gender = document.getElementById('gender').value;

  var output = document.getElementById('output');
  output.innerHTML = "<h3>Registration Details:</h3>" +
                     "<p><strong>Name:</strong> " + name + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Address:</strong> " + address + "</p>" +
                     "<p><strong>Contact No.:</strong> " + number + "</p>" +
                     "<p><strong>Image:</strong></p>" +
                     "<img src='" + image + "' alt='Student Image' width='200'>" +
                     "<p><strong>Gender:</strong> " + gender + "</p>";

  output.style.display = "block";
});

function clearForm() {
  document.getElementById('registrationForm').reset();
  document.getElementById('output').innerHTML = "";

  var output = document.getElementById('output');
  output.style.display = "none";
}
