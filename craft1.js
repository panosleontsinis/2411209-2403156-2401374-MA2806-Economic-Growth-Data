/* Styles for the line graph */

/* Styling the canvas element */
#myChart {
    width: 100%;
    height: 400px; /* Adjust the height as needed */
    border: 1px solid #ddd; /* Border for the chart */
    margin-bottom: 20px; /* Add some spacing at the bottom */
}

/* Styling the legend */
.chart-legend ul {
    list-style: none;
    padding: 0;
}

.chart-legend li {
    display: inline-block;
    margin-right: 20px; /* Add spacing between legend items */
}

.chart-legend span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px; /* Add spacing between color box and label */
}

/* Styling the tooltip */
.chart-tooltip {
    background-color: rgba(0, 0, 0, 0.7); /* Background color for tooltip */
    color: #fff; /* Text color for tooltip */
    padding: 5px 10px; /* Padding inside the tooltip */
    border-radius: 5px; /* Rounded corners for tooltip */
    position: absolute; /* Positioning the tooltip */
    display: none; /* Initially hide the tooltip */
}

/* Styling the tooltip arrow */
.chart-tooltip::before {
    content: '';
    position: absolute; /* Positioning the arrow */
    border-width: 5px; /* Size of the arrow */
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent; /* Color of the arrow */
    top: -10px; /* Position the arrow above the tooltip */
    left: 50%; /* Center the arrow horizontally */
    transform: translateX(-50%); /* Adjust position of the arrow */
}
