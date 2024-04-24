// Get the context of the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Revenue',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [2000, 2500, 1800, 3000, 2200, 3500]
    }]
};

// Define the options for the chart
var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Create the bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
