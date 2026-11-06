
const BASE_URL = "http://localhost:3000/users";

// POST - Add user
function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    };

    axios.post(`${BASE_URL}/add-user`, userDetails)
        .then((response) => {
            displayUserOnScreen(response.data);
        })
        .catch((error) => console.log(error));

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}


// GET - Display users
function displayUserOnScreen(userDetails) {

    const userItem = document.createElement("li");

    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));

    userItem.appendChild(deleteBtn);

    document.getElementById("userList").appendChild(userItem);

    // DELETE - Delete user
    deleteBtn.addEventListener("click", function () {

        axios.delete(`${BASE_URL}/delete-user/${userDetails.id}`)
            .then(() => {
                userItem.remove();
            })
            .catch((error) => console.log(error));

    });
}


// GET - Fetch users when page loads
document.addEventListener("DOMContentLoaded", () => {

    axios.get(`${BASE_URL}/get-users`)
        .then((response) => {

            response.data.forEach((userDetails) => {
                displayUserOnScreen(userDetails);
            });

        })
        .catch((error) => console.log(error));

});
