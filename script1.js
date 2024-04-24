// Define the data for the macroeconomic factors
const macroeconomicData = {
    labels: ['Inflation Rates', 'Gross Domestic Product (GDP)', 'Unemployment Rates', 'Interest Rates', 'Government Fiscal Policy', 'Monetary Policy', 'Exchange Rates', 'Balance of Trade', 'Consumer Confidence'],
    datasets: [{
        label: 'Importance of Macroeconomic Factors',
        data: [8, 10, 9, 7, 6, 7, 6, 5, 8], // Example data (scale from 1 to 10)
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Define the chart configuration
const chartConfig = {
    type: 'bar',
    data: macroeconomicData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Importance (Scale: 1-10)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Macroeconomic Factors'
                }
            }
        }
    }
};

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    const ctx = document.getElementById('macroeconomicChart');

    // Create the chart
    new Chart(ctx, chartConfig);
});

