// Initial array of freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
];

// Function to render freelancers on the webpage
function renderFreelancers() {
    const freelancerList = document.getElementById("freelancerlist");
    freelancerList.innerHTML = ""; // Clear the existing content

    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `;
        freelancerList.appendChild(row);
    });
}

// Function to calculate and update the average starting price
function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / freelancers.length;
    document.getElementById("average-price").textContent = `The average starting price is $${average.toFixed(2)}.`;
}

// Function to add a new freelancer
function addNewFreelancer() {
    if (freelancers.length < 15) {  // Check if the number of freelancers is less than 15
        const newFreelancer = generateRandomFreelancer();
        freelancers.push(newFreelancer);
        renderFreelancers();
        updateAveragePrice();
    } else {
        clearInterval(freelancerInterval);  // Stop adding new freelancers once 15 are listed
    }
}

// Function to generate a random freelancer (example names and occupations)
function generateRandomFreelancer() {
    const names = ["Carol", "Dave", "Eve", "Frank", "Grace"];
    const occupations = ["Programmer", "Designer", "Consultant", "Photographer", "Musician"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between $20 and $120
    return { name: randomName, occupation: randomOccupation, price: randomPrice };
}

// Initial rendering of freelancers and average price
renderFreelancers();
updateAveragePrice();

// Set an interval to add a new freelancer every 5 seconds
const freelancerInterval = setInterval(addNewFreelancer, 5000);
