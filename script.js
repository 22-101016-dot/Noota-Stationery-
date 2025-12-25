// Profit Trend
new Chart(document.getElementById("profitChart"), {
  type: "line",
  data: {
    labels: ["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],
    datasets: [{
      label: "Monthly Profit (EGP)",
      data: [-5000,-4000,-2900,-1700,-350,1100,2700,4500,6450,8600,10950,13550],
      borderWidth: 2,
      tension: 0.3
    }]
  }
});

// Market Sizing
new Chart(document.getElementById("marketChart"), {
  type: "bar",
  data: {
    labels: ["TAM", "SAM", "SOM"],
    datasets: [{
      label: "Market Size (EGP)",
      data: [10900000000, 3650000000, 73000000]
    }]
  }
});

// Sentiment Analysis
new Chart(document.getElementById("sentimentChart"), {
  type: "doughnut",
  data: {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [{
      data: [38, 28, 34]
    }]
  }
});
