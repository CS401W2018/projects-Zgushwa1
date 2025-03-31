document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
  
    if (!name || !email || !password) {
      alert("Please enter your name, email, and coupon code.");
      return;
    }
  
    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone
    };
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("message").innerHTML = response.message;
        document.getElementById("myForm").innerHTML = "";
      } else if (xhr.readyState === 4) {
        alert("Error submitting form.");
      }
    };
  
    xhr.send(JSON.stringify(data));
    console.log(data);
  });
  