// Import Chart.js library
import Chart from 'chart.js/auto';

// Data for modern world economies GDP
const modernWorldGDPData = {
    labels: ['USA', 'China', 'Japan', 'Germany', 'India', 'UK', 'France', 'Brazil', 'Italy', 'Canada'],
    datasets: [{
        label: 'GDP (trillion USD)',
        data: [21.43, 14.34, 5.15, 4.42, 3.27, 2.83, 2.78, 2.72, 2.07, 1.97], // GDP data in trillion USD
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};


const chartConfig = {
    type: 'bar',
    data: modernWorldGDPData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'GDP (trillion USD)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Countries'
                }
            }
        }
    }
};


const ctx = document.getElementById('modernWorldGDPChart');
const modernWorldGDPChart = new Chart(ctx, chartConfig);
