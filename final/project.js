document.getElementById('bookform').addEventListener('submit', function(event) {
    event.preventDefault();
    //alert('Booking Submitted');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;

    if (!name || !pickup || !dropoff) {
        alert("You need a name, a pickup, and a dropoff date.");
        return;
    }
    
    if (!age || age < 21) {
        alert("You need to be 21 to rent a vehicle.")
        return;
    }

    const formData = {
        name: name,
        email: email,
        age: age,
        pickup: pickup,
        dropoff: dropoff
    };

    alert('Booking Submitted');
    document.getElementById('bookform').reset();

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted succesfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error Booking Rental.")
        }
    };
    xhr.send(JSON.stringify(formData));
})