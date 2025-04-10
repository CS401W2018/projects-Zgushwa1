document.getElementById("tripForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        interests: document.getElementById("interests").value,
        visited: document.querySelector('input[name="visited"]:checked')?.value || "",
        travelDate: document.getElementById("travel-date").value,
        comments: document.getElementById("comments").value
    };

    if (!formData.fullname || !formData.email) {
        alert("Please fill out your full name and email.");
        return;
    }

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("tripForm").innerHTML = "";
            document.getElementById("message").innerHTML = response.message;
            alert(response.message);
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});
