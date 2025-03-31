document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const formData = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        age: document.getElementById("age").value
    };

    if (!formData.fullname || !formData.email || !formData.password) {
        alert("Please fill out your full name, email, and password.");
        return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 13 || age > 120) {
        alert("Please enter a valid age between 13 and 120.");
        return;
    }

    console.log(formData);

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

    xhr.send(JSON.stringify(formData));

    alert(`Success: ${formData.fullname}`);
});
