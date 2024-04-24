// Data for the bar chart
const data = {
    labels: ['GDP', 'Unemployment', 'Inflation', 'Interest Rates', 'Government Spending'],
    values: [2.5, 7, 2.2, 0.5, 10] // Example values (replace with actual data)
};

// Get the canvas element
const canvas = document.getElementById('macroChart');
const ctx = canvas.getContext('2d');

// Set chart width and height
canvas.width = 600;
canvas.height = 400;

// Set bar colors
const barColors = ['#4CAF50', '#2196F3', '#FF5722', '#FFC107', '#9C27B0']; // Example colors

// Calculate bar width and spacing
const barWidth = (canvas.width - 100) / data.values.length;
const barSpacing = 20;

// Draw the bars
data.values.forEach((value, index) => {
    const x = 50 + index * (barWidth + barSpacing);
    const y = canvas.height - value * 20; // Scale value for display
    const barHeight = value * 20; // Scale value for display
    ctx.fillStyle = barColors[index];
    ctx.fillRect(x, y, barWidth, barHeight);
});

// Add labels
ctx.fillStyle = '#333';
ctx.font = '14px Arial';
data.labels.forEach((label, index) => {
    const x = 50 + index * (barWidth + barSpacing) + barWidth / 2;
    const y = canvas.height - 10;
    ctx.fillText(label, x, y);
});

