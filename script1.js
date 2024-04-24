// Define the data for economic growth factors
const economicGrowthData = {
    labels: ['Investment in Capital', 'Technological Innovation', 'Human Capital Development', 'Infrastructure Development', 'Trade Expansion', 'Entrepreneurship', 'Productivity Growth', 'Research and Development', 'Income Equality'],
    datasets: [{
        label: 'Importance of Economic Growth Factors',
        data: [8, 9, 8, 7, 6, 7, 8, 9, 7], // Example data (scale from 1 to 10)
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Define the chart configuration for economic growth
const economicGrowthConfig = {
    type: 'bar',
    data: economicGrowthData,
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
                    text: 'Economic Growth Factors'
                }
            }
        }
    }
};

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    const ctx = document.getElementById('economicGrowthChart');

    // Create the chart for economic growth
    new Chart(ctx, economicGrowthConfig);
});
