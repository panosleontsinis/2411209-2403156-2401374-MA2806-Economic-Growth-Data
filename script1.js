<script>
        // Sample data for GDP growth over years
        const years = ['2020', '2021', '2022', '2023', '2024'];
        const gdpValues = [50, 55, 60, 65, 70];

        // Get canvas element
        const ctx = document.getElementById('myChart').getContext('2d');

        // Create a new bar chart
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'GDP Growth Over Time',
                    data: gdpValues,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
                    borderColor: 'rgba(54, 162, 235, 1)', // Darker shade of blue for border
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    </script>
