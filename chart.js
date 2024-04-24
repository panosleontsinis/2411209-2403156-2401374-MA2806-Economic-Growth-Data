// Define the data for the chart
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sample Data',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Define the chart configuration
const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Function to create the chart
function createChart() {
    // Get the canvas element
    const ctx = document.getElementById('myChart');

    // Create the chart
    new Chart(ctx, chartConfig);
}

// Call the function to create the chart
createChart();
