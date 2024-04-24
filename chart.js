// chart.js

// Sample data for the chart
const macroChartData = {
    labels: ['GDP', 'Unemployment', 'Inflation', 'Interest Rates'],
    datasets: [{
        label: 'Key Macroeconomic Factors',
        data: [85, 70, 60, 75],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options for the chart
const macroChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Get the canvas element
const macroChartCanvas = document.getElementById('macroChart');

// Create the chart
const macroChart = new Chart(macroChartCanvas, {
    type: 'bar',
    data: macroChartData,
    options: macroChartOptions
});
