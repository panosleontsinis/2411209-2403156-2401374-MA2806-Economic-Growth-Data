<script>
    // Get the canvas element
    const ctx = document.getElementById('macroeconomicChart').getContext('2d');

    // Define the data for the chart
    const chartData = {
        labels: ['GDP', 'Unemployment Rate', 'Inflation Rate'],
        datasets: [{
            label: 'Macroeconomic Factors',
            data: [15, 7, 10], // Sample data for GDP, unemployment rate, and inflation rate
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Red for GDP
                'rgba(54, 162, 235, 0.2)', // Blue for unemployment rate
                'rgba(255, 206, 86, 0.2)' // Yellow for inflation rate
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
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

    // Create the chart
    new Chart(ctx, chartConfig);
</script>
