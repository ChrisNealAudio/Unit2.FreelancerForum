// Function to create table header
function createTableHeader(table) {
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Define column headers
  const headers = ["Name", "Price", "Occupation"];

  // Create header cells
  for (const header of headers) {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  }

  // Append header row to thead
  thead.appendChild(headerRow);

  // Append thead to the table
  table.appendChild(thead);
}

// Function to create a table row for a freelancer
function createTableRow(freelancer) {
  const row = document.createElement("tr");

  // Populate cells with freelancer data
  for (const key in freelancer) {
    if (freelancer.hasOwnProperty(key)) {
      const cell = document.createElement("td");
      cell.textContent = freelancer[key];
      row.appendChild(cell);
    }
  }

  return row;
}

// Function to create table body
function createTableBody(table, freelancers) {
  const tbody = document.createElement("tbody");

  // Create a row for each freelancer
  for (const freelancer of freelancers) {
    const row = createTableRow(freelancer);
    tbody.appendChild(row);
  }

  // Append tbody to the table
  table.appendChild(tbody);
}

// Function to append the table to a container
function appendTableToContainer(table) {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
  h1.textContent = "List Of Freelancers.";

  // Append heading and table to the root container
  root.appendChild(h1);
  root.appendChild(table);
}

// Function to calculate and display the average price
function calculateAveragePrice() {
  const averagePriceDisplay = document.getElementById("average-price");

  // Calculate total starting price
  const totalStartingPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );

  // Calculate average price
  const averagePrice = totalStartingPrice / freelancers.length || 0;

  // Display average price with two decimal places
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice.toFixed(
    2
  )}`;
}

// Function to render the table
function render(initialState) {
  const table = document.createElement("table");

  // Create table header and body
  createTableHeader(table);
  createTableBody(table, initialState);

  // Append the table to the container
  appendTableToContainer(table);

  // Calculate and display the average price
  calculateAveragePrice();
}

// Array of initial freelancer data
const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Charles", price: 25, occupation: "Driver" },
  { name: "Bill", price: 45, occupation: "Chef" },
  { name: "Erin", price: 90, occupation: "Artist" },
];

// Function to add a new freelancer
function addFreelancer(newFreelancerData) {
  freelancers.push(newFreelancerData);
  render(freelancers);
}

// Function to add freelancers automatically
function addFreelancersAutomatically() {
  setInterval(() => {
    const newFreelancerData = {
      name: "Steve",
      price: 100,
      occupation: "DJ",
    };

    addFreelancer(newFreelancerData);
  }, 3000); // Add a new freelancer every 3 seconds
}

// Initial render and automatic addition of freelancers
render(freelancers);
addFreelancersAutomatically();
