// Function to search for pizzas based on the search term
// Using the arguments to validate if it is search or displayall
async function searchPizza(whichButton) {
    const searchTerm = document.getElementById('search').value.trim();
    let apiURL = 'http://localhost:3000/api/pizza';
    // Checking which button sent the request
    // If search then validate if search is empty and build query
    if (whichButton === 'search') {
        if (searchTerm === '') {
            alert('Please enter a search term.');
            return;
        }
        apiURL += `?search=${(searchTerm)}`; 
    }
    

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const mealsTable = document.getElementById('meals-table');
        // Clear previous search results
        mealsTable.innerHTML = ''; 

        if (data.pizzas && data.pizzas.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Pizza Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            `;
            data.pizzas.forEach(pizza => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pizza.name}</td>
                    <td>${pizza.description}</td>
                    <td>${pizza.price}</td>
                    <td><img src="${pizza.image}" alt="${pizza.name}" style="max-width: 100px; border-radius:5px"></td>
                `;
                table.appendChild(row);
            });
            mealsTable.appendChild(table);
        } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4">No results found.</td>';
            mealsTable.appendChild(row);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function sendEmail() {
    // Get the email address from the input field
    var emailAddress = document.getElementById('email').value;

    // Get the first name
    var firstName = document.getElementById('fname').value;

    // Get the last name
    var lastName = document.getElementById('lname').value;

    // Get phone
    var phone = document.getElementById('phone').value;

    // Get message
    var message = document.getElementById('message').value;

    
    // Check if the fields are empty
    if (emailAddress.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    } 
    
    // if all fields are ok send alert
    alert('Email sent successfully!');
}