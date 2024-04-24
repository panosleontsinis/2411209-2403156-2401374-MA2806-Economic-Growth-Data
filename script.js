// JavaScript code for data visualization of Consumer Price Index (CPI)

// Sample data for CPI over time
const cpiData = [
    { year: 2010, cpi: 100 },
    { year: 2011, cpi: 102 },
    { year: 2012, cpi: 105 },
    { year: 2013, cpi: 108 },
    { year: 2014, cpi: 110 },
    { year: 2015, cpi: 112 },
    { year: 2016, cpi: 115 },
    { year: 2017, cpi: 118 },
    { year: 2018, cpi: 120 },
    { year: 2019, cpi: 123 },
    { year: 2020, cpi: 126 },
    { year: 2021, cpi: 130 }
  ];
  
  // Function to draw the CPI chart
  function drawCPIChart(data) {
    // Code to visualize the CPI data using a charting library like Chart.js or D3.js
    // Example:
    // Create a line chart showing CPI over time
    const ctx = document.getElementById('cpiChart').getContext('2d');
    const cpiChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(item => item.year),
        datasets: [{
          label: 'Consumer Price Index (CPI)',
          data: data.map(item => item.cpi),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Call the function to draw the CPI chart
  drawCPIChart(cpiData);
  
