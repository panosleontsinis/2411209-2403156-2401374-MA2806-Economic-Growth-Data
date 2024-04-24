<script>
        const years = ['2015', '2016', '2017', '2018', '2019', '2020'];
        const GDP = [2.5, 2.7, 3.0, 3.2, 3.5, 3.8]; // Sample GDP growth rates

        const ctx = document.getElementById('economicGraph').getContext('2d');

        const economicGraph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'GDP Growth Rate',
                    data: GDP,
                    borderColor: 'rgba(75, 192, 192, 1)', // Teal color
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'GDP Growth Rate (%)'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Year'
                        }
                    }]
                }
            }
        });
    </script>
