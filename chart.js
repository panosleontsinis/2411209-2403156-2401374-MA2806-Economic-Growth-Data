<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Macroeconomic Indicators Importance</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    canvas {
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <canvas id="macroImportanceChart"></canvas>

  <script>
    // Data for macroeconomic indicators importance
    const data = {
      labels: ['GDP Growth', 'Unemployment Rate', 'Inflation Rate', 'Interest Rates', 'Government Fiscal Policy', 'Monetary Policy'],
      datasets: [{
        label: 'Importance',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [8, 7, 6, 7, 8, 9] // Importance rating out of 10 for each indicator
      }]
    };

    // Configuration options
    const options = {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          stepSize: 2
        }
      }
    };

    // Create radar chart
    const ctx = document.getElementById('macroImportanceChart').getContext('2d');
    const macroImportanceChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options
    });
  </script>
</body>
</html>
