// Function to fetch data from the World Bank API
async function fetchData() {
    const url = 'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data[1]; // The actual data is in the second element of the array
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to process and visualize the fetched data
async function visualizeData() {
    const data = await fetchData();
    if (!data) return;

    // Extracting necessary information from the data
    const countries = data.map(entry => entry.country.value);
    const gdpValues = data.map(entry => entry.value);

    // Creating a chart using Chart.js library
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [{
                label: 'GDP (in current US$)',
                data: gdpValues,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the visualizeData function to initiate data fetching and visualization
visualizeData();

